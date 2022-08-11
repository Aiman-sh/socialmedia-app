import "./profile.css";
import Topbar from "../../components/topBar/Topbar";
import Sidebar from "../../components/sideBar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightBar/Rightbar";

export default function Profile(){
    return (
        <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className="profileCoverImg" src="assets/3.jpg" alt="" />
                            <img className="profileUserImg" src="assets/person7.jpg" alt="" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Timmy Drew</h4>
                        <span className="profileInfoDesc">hello my friends!</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div> 
            </div>

        </>
    );

}

