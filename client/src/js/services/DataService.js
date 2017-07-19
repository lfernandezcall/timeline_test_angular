function DataService ($http) {

    function getData() {
        return $http.get('/rest')
            .then(response => response.data)
    }
    return { getData }

}

module.exports = DataService