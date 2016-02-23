import React,{Component} from 'react';
class Cover extends Component {
    render() {
        return (
            <div className="row" id="cover" style={{height:'100vh',
        backgroundColor:"black",
        backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA')",
        backgroundSize:"cover",
        backgroundPosition:"50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"}}>
                <div>
                    <div style={{textAlign:"center"}}>
                        <img style={{width:"200px"}}
                             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzMFjujgib4Md4MHoGD4VoIDwqjaG3DDrylUns_rY8dgSuybA"/>

                        <h1>LOGO</h1>

                        <h1>LOGO</h1>

                        <h1>LOGO</h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cover;