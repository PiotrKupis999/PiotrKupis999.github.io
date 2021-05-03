var app = new Vue({
    el: "#app",
    data: {
        googleSearch: "",
        cities: window.cities,
        isActive: 0,
        control: 0
    },

    computed: {
        filteredCities: function () {
            if (this.googleSearch.length > 0) {
                let miasta = this.cities.filter(city => city.name.includes(this.googleSearch))
                if (miasta.length > 10) {
                    return miasta.slice(0, 10);
                }
                else {
                    return miasta;
                }
            }
        }
    },

});