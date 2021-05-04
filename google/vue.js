var app = new Vue({
    el: "#app",
    data: {
        googleSearch: "",
        cities: window.cities,
        isActive: 0,
        control: 0
    },
    updated() {
        this.$nextTick(() => {

            if (this.change) {
                this.$refs.dla_results.focus();

            } else {

                this.$refs.dla_start.focus();

            }

        });
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
    methods: {
        autocomplete(city) {
            this.googleSearch = city.name;
            this.results = this.googleSearch;
        },

        wytluszczenie: function(a)
        {
            wyszukaj = this.googleSearch;
            var pom = a.split(wyszukaj);
            for(i = 0; i < pom.length; i++)
            {
                a = a.replace(pom[i], pom[i].bold());
            }
            return a;
        },
        czy_jest: function()
        {
            this.isActive = 1;
        }
    },

});