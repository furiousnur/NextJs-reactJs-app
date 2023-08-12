async function getData() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();
    return data['products'];
}
const Page = async () => {
    
    let data = await getData();
    
    return (
        <div>
            {
                data.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item['title']}</h1> 
                        </div>
                    );
                })
            } 
        </div>
    );
};

export default Page;
