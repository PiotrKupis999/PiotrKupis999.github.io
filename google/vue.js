var app = new Vue({
    el: "#app",
    data: {
        googleSearch: "",
        cities: window.cities,
        isActive: 0,
        control: 0,
        current: -1,
        update_filteredCities:true,
        focused: false,
        change: false,
        
        autocompleterIsActive: false,
        
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
                this.current=-1;
            }
        }
    },

    watch : {
        googleSearch() {
            console.log('this.autocompleterIsActive: ', this.autocompleterIsActive);
            if (this.autocompleterIsActive) {
                return;
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
        },

        

        goTo(index) {
            if (!this.autocompleterIsActive) {
                index = 0;
            }

            if (index > this.filteredCities.length - 1) {
                index = 0;
            } else if (index < 0) {
                index = this.filteredCities.length - 1;
            }

            this.autocompleterIsActive = true;
            this.isActive = index;
            this.googleSearch = this.filteredCities[index].name;
        },
        goToResults(name) {
            this.autocompleterIsActive = true;

            if (name) {
                this.googleSearch = name;
            }

            this.isOnResults = true;
            this.filteredCities = [];
            this.$nextTick(() => {
                this.autocompleterIsActive = false;
            });
        }
    
    },

});