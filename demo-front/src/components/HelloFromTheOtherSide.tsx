import axios from 'axios'
function HelloFromTheOtherSide() {

    var config = {
        method: 'get',
        url: 'https://icy-river-0d35d7e03.azurestaticapps.net/api/HelloFromTheOtherside?name=Me',
        headers: { }
    };

    const HelloResponse = axios.get<String>(config.url)
    .then(response => {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

    return(
        <div>
            <p>{JSON.stringify(HelloResponse)}</p>
        </div>
    );
}
export default HelloFromTheOtherSide;