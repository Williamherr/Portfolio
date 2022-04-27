

export default function UrlLinks({ props }) {

    const LinkListHandler = (link) => {
        var list = [];
        var i = 0;


        if (link.url == null || link.url == "") {
            return;
        }

        list.push(
            <div key={i} style={{ padding: '10px'}}>
                <a href={link.url} >
                    <img src={link.icon} alt={link.details} style={{ width: '40px', height: '40px,' }}></img>
                </a>
            </div>
        )
        
        return list;
    }

    return LinkListHandler(props);
}