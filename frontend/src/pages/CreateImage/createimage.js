import styled from "styled-components";
import Nav_my from '../../components/nav_mypage.js';
import { ReactComponent as MemberInfo } from '../svgs/member_info.svg';
import './createimage.css'

export function CreateImage() {

    let before = null;
    

    return (
        <div class='create'>
            <div class='create_con'>
                <Nav_my/>
                <div>
                    <p>Example</p>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreateImage;
