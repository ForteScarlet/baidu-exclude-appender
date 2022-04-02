const Counter = {
    data() {
        return {
            excludes: [{
                id: 'csbn', enable: true
            }, {
                id: 'dilibili', enable: false
            }]
        }
    }, methods: {
        addExclude(newExclude) {
            for (let exclude of this.excludes) {
                if (exclude.id === newExclude.id) {
                    return false
                }
            }
            this.excludes.unshift(newExclude)
        }, removeExclude(id) {

        }, doEnable(id) {

        }, doDisable(id) {

        }
    }, computed: {
        searchView() {
            let value = "今晚吃 -c 什么 -a -b"
            const needExcludes = this.excludes
                .filter((it) => {
                    return it.enable
                })
                .map((it) => {
                    return it.id
                })
            // if (this.excludes) {
            //     for (let exclude of this.excludes) {
            //         if (exclude.enable) {
            //             value += ' -' + exclude.id
            //         }
            //     }
            // }
            return resetSearch(value, needExcludes)
        }
    }, watch: {
        excludes() {
            console.log("变化")
        }
    }
}


Vue.createApp(Counter).mount('#counter')