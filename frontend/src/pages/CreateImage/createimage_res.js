import styled from "styled-components";
import Nav_my from '../../components/nav_mypage.js';
import { ReactComponent as MemberImg } from '../svgs/member_info.svg';
import { Btn_black } from '../../components/button.js';
import './createimage.css'
import axios from 'axios';
import React, { useEffect, useState, useRef, useCallback } from 'react';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const P = styled.p`
    font-size: 26px;
`;
const Member = styled(MemberImg)`
    width:230px;
    height:230px;
`;
const Div = styled.div`
    display: flex;
    justify-content: center;
`;
// function saveAsPdf() {
//     const element = document.getElementById('after_img');
//     const pdf = new jsPDF();
//     const pdfWidth = pdf.internal.pageSize.getWidth();
//     const pdfHeight = pdf.internal.pageSize.getHeight();

//     html2canvas(element, { useCORS: true }).then(canvas => {
//         const imgData = canvas.toDataURL('image/png');
//         const imgWidth = pdfWidth * 0.6; // 이미지를 원하는 크기로 조정합니다.
//         const imgHeight = (canvas.height * imgWidth) / canvas.width;

//         pdf.addImage(imgData, 'PNG', (pdfWidth - imgWidth) / 2, (pdfHeight - imgHeight) / 2, imgWidth, imgHeight);

//         pdf.save('ImageCreate.pdf');
//     });
// }

export function CreateImageResult() {
    const pk = localStorage.getItem('pk')
    const [imgSrc, setImgSrc] = useState('');
    const [imgSrc2, setImgSrc2] = useState('');
    var num = 0
    useEffect(() => {
        // Call your API to get the image data
        axios.get('http://127.0.0.1:8000/api/faceinput/')
            .then((response) => {
                console.log('here')
                const d = response.data;
                const filteredData = d.filter(item => item.user_id === pk);
                const length = filteredData.length;
                const image = filteredData[length - 1].image;
                const url = `http://127.0.0.1:8000${image}`; // You might need to replace with your server's URL
                setImgSrc(url);
                console.log(imgSrc);
            })
            .catch((error) => {
                console.log(error);
            });

        axios.get('http://127.0.0.1:8000/ai/apply/')
            .then((response) => {
                console.log('get apply works ')
                const d = response.data;
                const filteredData = d.filter(item => item.user_id === pk);
                const length = filteredData.length;
                const image = filteredData[length - 1].image;
                const url = `http://127.0.0.1:8000${image}`; // You might need to replace with your server's URL
                setImgSrc2(url);
                console.log(imgSrc2);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [CreateImageResult]); // The empty array makes sure the effect only runs once on mount


    function dataURLtoBlob(dataurl) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], {
            type: mime
        });
    }

    // function check(imgSrc){
    //     if (num != 1){
    //         downloadImg(imgSrc)
    //     }
    // }

    function downloadImg() {
        num = 1
        var image = new Image();
        image.crossOrigin = "anonymous";
        image.src = imgSrc2;
        var fileName = image.src.split("/").pop();
        image.onload = function () {
            var canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            canvas.getContext('2d').drawImage(this, 0, 0);
            if (typeof window.navigator.msSaveBlob !== 'undefined') {
                window.navigator.msSaveBlob(dataURLtoBlob(canvas.toDataURL()), fileName);
            } else {
                var link = document.createElement('a');
                link.href = canvas.toDataURL();
                link.download = fileName;
                link.click();
            }
        };
    }

    const pdfRef = useRef();
    const downloadPDF = useCallback(() => {
      const input = pdfRef.current;
      const { offsetHeight, scrollHeight } = input;
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4', true);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgX = (pdfWidth - imgWidth * ratio) / 2;
        const imgY = 10;
        pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
        pdf.save('makeupmethod.pdf');
      });
    }, [pdfRef]);


    let before = (<Member />)
    if (imgSrc != '') {
        before = <img src={imgSrc} alt="이미지" style={{ width: '230px', height: '230px', display: 'flex' }} />
    }
    let after = (<Member />)
    if (imgSrc2 != '') {
        console.log("imgSrc2 is not empty");
        after = <img src={imgSrc2} alt="이미지" style={{ width: '230px', height: '230px', display: 'flex' }} />
    }
    else {
        console.log("imgsrc2 is empty")
    }
    return (
        <div class='create' ref={pdfRef}>
            <div class='create_con'>
                <Nav_my />
                <div className="in">
                    <Div>
                        <P>추천 받은 화장법을 반영한 AI 이미지를 생성합니다.</P>
                    </Div>
                    <Div>
                        <p style={{ fontFamily: 'PT Serif', fontWeight: 'bold', fontSize: '53px', color: '' }}>Make Image with AI</p>
                    </Div>
                    <div className="example" style={{ marginTop: '100px' }}>
                        <div>
                            {before}
                            <Div>
                                <p>Before</p>
                            </Div>
                        </div>
                        <hr style={{ height: '300px', width: '.1vw', borderWidth: '0', backgroundColor: '#3A3A3A' }} />
                        <div>
                            <div>
                                {after}
                                <Div>
                                    <p>After</p>
                                </Div>
                            </div>
                        </div>
                    </div>
                    <Div>
                        <Btn_black style={{ width: '170px', height: '60px', fontSize: '20px' }} text={'Save'} onClick={downloadImg}/>
                    </Div>
                </div>
            </div>
        </div>
    );
}


export default CreateImageResult;
