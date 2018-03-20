import { debounce } from "throttle-debounce"

const { Component } = wp.element
const { __ } = wp.i18n

const { BaseControl } = wp.components

export default class Geocoder extends Component {
    state = {
        searchQuery: "",
        results: false
    }

    onSearch = event => {
        this.setState({ searchQuery: event.target.value })
        this.performSearch()
    }

    performSearch = debounce(300, () => {
        const { searchQuery } = this.state
        if (searchQuery.length < 3) {
            return
        }

        this.setState({
            results: __("Loading...", "advanced-gutenberg-blocks")
        })

        const geocoder = new google.maps.Geocoder()

        geocoder.geocode({ address: searchQuery }, (results, status) => {
            if (status == "OK") {
                if (results.length == 0) {
                    results = __("No result", "advanced-gutenberg-blocks")
                }

                this.setState({ results: results })
            } else {
                this.setState({
                    results:
                        __(
                            "Geocode was not successful for the following reason:",
                            "advanced-gutenberg-blocks"
                        ) + status
                })
            }
        })
    })

    getGeocodedObj(obj) {
        this.props.onChangeAddress(obj)
    }

    _renderResults = () => {
        return this.state.results.map(result => {
            return (
                <li key={`gmap-result-${result.place_id}`} onClick={() => this.getGeocodedObj(result)}>
                    {result.formatted_address}
                </li>
            )
        })
    }

    render() {
        return (
            <BaseControl label={__("Address", "advanced-gutenberg-blocks")}>
                <input
                    type="search"
                    placeholder={__(
                        "Type an address",
                        "advanced-gutenberg-blocks"
                    )}
                    className="blocks-text-control__input"
                    onChange={this.onSearch}
                    value={this.state.searchQuery}
                />

                <div className="gutenblocks-panel-results">
                    {!!this.state.results &&
                    Array.isArray(this.state.results) ? (
                        <ul>{this._renderResults()}</ul>
                    ) : (
                        <p>{this.state.results}</p>
                    )}
                </div>
            </BaseControl>
        )
    }
}
