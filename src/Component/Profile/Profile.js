import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Profile.css'
const Profile = () => {
    return (
        <div>
            <Navbar />
            <section className="profile flex-center">
                <h2 className="section-title text-center">User Profile</h2>
                <div className="card flex-center">
                    <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/289592390_1516980372052454_1973938274086815291_n.jpg?stp=dst-jpg_p240x240&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF_1ma35pcriAv-XxWM5CxNx40VrFGDomnHjRWsUYOiaQVNvos22HQE6BLzg0WDXVaoqaTUNIfdrkhcjcTALiXo&_nc_ohc=vDsplawpCFgAX_WYAUO&_nc_ht=scontent.fdac14-1.fna&oh=00_AfAhxh1M-Z9cEXNMMqZ_N-8NEL4VIKOO1yqwaSIp_7_7YA&oe=63DD2BC3" alt="" className="profile_img" />
                    <h2 className="profile_name">Moheuddin Munna</h2>
                    <p className="profile_emaik">Moheuddin.Monnab4u@gmail.com</p>
                    <p className="profile_about">I Love to buy gadgets</p>
                    <div className="profile_buttons">
                        <button className="btn profile_edit-btn">
                            <FaEdit className='fa-2x' />
                        </button>
                        <button className="btn profile_edit-btn">
                            <FaTrash className='fa-2x'/>
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Profile;
