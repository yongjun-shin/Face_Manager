import styled from "styled-components";
import Nav_my from "../../components/nav_mypage";
import Recommend from "../../components/recommendation";
import Makeup from "../MakeupMethod/makeupmethod";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './history.css';

const P = styled.p`
    color: rgba(95, 90, 81, 0.80);
    font-size: 20px;
    text-align: center;
`;

function Rec() {
    let url = null;
    let title= null;
    let path = null;
    let type = localStorage.getItem('type');

    if (type === 'dspt'){
        url = [
        "https://atelierb.co.kr/web/product/big/202306/3ad0f9e656234a2214e6485dbc7cf515.jpg",
        "https://roundlab.co.kr/web/product/big/202211/3ce0482ed7ec0352b68272c34fa32138.jpg",
        "https://images.innisfree.co.kr/upload/product/34896_p1_S_450.jpg?T202306300957",
        ]
        title = ["[아틀리에]비타민C 캡슐 화이트닝 레이어 크림", "[라운드랩]자작나무 수분 선크림", "[이니스프리]비타c 그린티 엔자임 잡티 토닝 세럼"]
        path = [
            "https://atelierb.co.kr/product/비타민c-캡슐-화이트닝-레이어-크림/10/",
            "https://roundlab.co.kr/product/%EC%9E%90%EC%9E%91%EB%82%98%EB%AC%B4-%EC%88%98%EB%B6%84-%EC%84%A0%ED%81%AC%EB%A6%BC-50ml/138/",
            "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=34896",
        ]
    } else if (type === 'dsnt'){
        url = [
            "https://shop-phinf.pstatic.net/20230623_278/1687487694633T4BDW_PNG/3756189462385503_1826091338.png?type=m510",
            "https://snature.kr/web/product/big/202306/25d299f88da9a4f263f1d8aaf5289a9a.jpg",
            "https://www.illiyoon.com/media/catalog/product/cache/8fbc8cb69acb0a868c4ed180904d3a72/0/1/0103__350.jpg",
        ]
        title = ["코코드메르 스킨 코드 세럼 05 DSNT", "[에스네이처]아쿠아 오아시스 토너", "[일리윤]세라마이드 아토 로션"]
        path = [
            "https://smartstore.naver.com/cocodemer_official/products/8757094249?NaPm=ct%3Dljm8qgs0%7Cci%3Db0bac9399d43999c617540bde1b0abb3a599d39d%7Ctr%3Dsls%7Csn%3D5096097%7Chk%3Dc438065246da16614a00fea2841eec04a75c2f47",
            "https://snature.kr/product/detail.htmlproduct_no=79&cate_no=75&display_group=1",
            "https://www.illiyoon.com/products/ceramide-ato-lotion-350ml.html",
        ]
    } else if (type === 'dspw'){ 
        url = [
            "./imgs/dspw_1.jpg",
            "https://images-kr.amoremall.com/products/001251000002/001251000002_01.jpg?1655894334214&format=webp&resize=550:550&shrink=550:550",
            "https://droracle.co.kr/web/product/extra/big/202305/e248e32182f0f5a4cee4341d8fc26f3f.jpg",
        ]
        title = [
            "[비플레인]선뮤즈 모이스처 선크림",
            "[바이위시트렌드]비타민 어메이징 바쿠치올 나이트 크림",
            "[닥터오라클]레티노타이트닝 비타민A 레티놀 앰플",
        ]
        path = [
            "https://www.beplain.co.kr/goods/goods_view.php?goodsNo=1000000059",
            "https://www.amoremall.com/kr/ko/product/detail?onlineProdSn=53199&onlineProdCode=001251000002",
            "https://droracle.co.kr/product/2023-화해-어워드-1위-레티노타이트닝-비타민a레티놀-앰플-30ml그린티진정-마스크팩-10매-증정/661/",
        ]
    } else if (type === 'dsnw'){ 
        url = [
            "http://wellage.co.kr/web/product/extra/big/202009/e8e662cabaf5c1ac6f88d089b1ca4bf5.jpg",
            "https://cdn-pro-web-40-6.cdn-nhncommerce.com/dalbapiedmot_godomall_com/data/goods/22/01/02/1000000100/1000000100_detail_07.png",
            "https://snature.kr/web/product/big/202211/ca2c9d10f28e3e985fd56f567da31ce9.jpg",
        ]
        title = [
            "[웰라쥬]리얼 히알루로닉 블루 100 앰플",
            "[달바]화이트 트러플 더블 세럼 앤 크림",
            "[에스네이처]아쿠아 콜라겐 펩타이드 젤에센스",
        ]
        path = [
            "http://wellage.co.kr/product/$1/1010/",
            "https://www.dalba.co.kr/goods/goods_view.php?goodsNo=1000000100",
            "https://snature.kr/product/탄력주름개선맑은수분광-에스네이처-아쿠아-콜라겐-펩타이드-트리플-젤-에센스-50ml/72/",
        ]
    } else if (type === 'ospt'){
        url = [
            "https://fs.dr-g.co.kr/item/5157/5157-add2.jpg",
            "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0018/A00000018344102ko.jpg?l=ko",
            "https://cf.product-image.s.zigzag.kr/original/d/2022/8/13/18473_202208131550340885_90258.jpeg?width=1080&height=1080&quality=80&format=webp",
        ]
        title = [
            "[닥터지]레드 블레미쉬 클리어 수딩 크림",
            "[리얼베리어]시카릴리프Rx 페이드인 세럼",
            "[인스테드]소프트 글로우 결 토너",
        ]
        path = [
            "https://www.dr-g.co.kr/item/5157",
            "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000183441&dispCatNo=1000001000100090001&trackingCd=Result_6&t_page=통합검색결과페이지&t_click=상품상세&t_search_name=리얼베리어&t_number=6",
            "https://instead.cool/product/softglowgyeoltoner",
        ]
    } else if (type === 'osnt'){
        url = [
            "https://m.roundlab.co.kr/web/product/big/202204/a9d58d7c6e3bde2980dbaf8548300bd7.jpg",
            "./imgs/osnt_2.jpg",
            "./imgs/osnt_3.jpg",
        ]
        title = [
            "[라운드랩]1025 독도 토너",
            "[토리든]다이브인 저분자 히알루론산 수딩크림",
            "[토리든]다이브인 무기자차 마일드 선크림",
        ]
        path = [
            "https://m.roundlab.co.kr/product/촉촉한-각질제거-1025-독도-토너-200ml/22/category/102/display/1/",
            "https://www.torriden.com/goods/goods_view.php?goodsNo=132",
            "https://www.torriden.com/goods/goods_view.php?goodsNo=143",
        ]
    } else if (type === 'ospw'){
        url = [
            "https://hyggee.com/web/product/big/202306/2f8cc754a13ef35d56596612e1b9dd4d.png",
            "https://rovectin.co.kr/web/product/big/202306/e291959a8fd34f30eaf550a7766a2fac.jpg",
            "https://pcalm.co.kr/web/product/big/202304/0d3a01db81cc878710e07e1925b26ca9.jpg",
        ]
        title = [
            "[휘게]오운 비건 카밍 세럼",
            "[로벡틴]로벡틴 아쿠아 히알루로닉 에센스",
            "[피캄]베리어 사이클 KMX 토너",
        ]
        path = [
            "https://hyggee.com/product/오운-비건-카밍-세럼-50ml/197/",
            "https://rovectin.co.kr/product/로벡틴-아쿠아-히알루로닉-에센스-100ml/96/",
            "https://pcalm.co.kr/product/피캄-베리어사이클-kmx-토너/18/",
        ]
    } else if (type === 'osnw'){
        url = [
            "https://coreanamall.com/upload/item/FCXI030100/20220321162417L(2).jpg",
            "https://dkflthf123.cdn-nhncommerce.com/data/goods/21/09/36/2103040016/2103040016_detail_064.jpg",
            "https://cdn-pro-web-251-119.cdn-nhncommerce.com/botanity2_godomall_com/data/goods/21/02/05/1000000170/1000000170_detail_0100.jpg",
        ]
        title = [
            "[앰플엔]세라마이드샷 고보습 앰플",
            "[이솔]토탈 8 히알루론산 세럼",
            "[보타니티]징크 라이트 선 로션",
        ]
        path = [
            "https://coreanamall.com/products/view/FCXI030100",
            "https://www.2sol.co.kr/goods/goods_view.php?goodsNo=2103040016&mtn=7^|^메인_베스트%26신상품^|^n",
            "https://www.univeramall.com/goods/goods_view.php?goodsNo=1000000170",
        ]
    } else if (type === 'orpt'){
        url = [
            "https://roundlab.co.kr/web/product/big/202211/3ce0482ed7ec0352b68272c34fa32138.jpg",
            "https://cosnori.com/Detail_h/toneup/whitecream/whdress_01.jpg",
            "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0016/A00000016232322ko.jpg?l=ko",
        ]
        title = [
            "[라운드랩]자작나무 수분 선크림",
            "[코스노리]화이트닝 드레스 크림",
            "[구달]청귤 비타C 잡티케어 세럼",
        ]
        path = [
            "https://roundlab.co.kr/product/자작나무-수분-선크림-50ml/138/",
            "https://cosnori.com/product/코스노리-화이트닝드레스-미백-톤업크림-20192020-화해-1위-톤업크림/19/",
            "https://clubclio.co.kr/shop/goodsView/0000003511",
        ]
    } else if (type === 'ornt'){
        url = [
            "./imgs/ornt_1.jpg",
            "./imgs/ornt_2.png",
            "https://snature.kr/web/product/big/202211/7fef6ef9806552a2cc1eff3907ab40b7.jpg",
        ]
        title = [
            "[비플레인]녹두 약산성 클렌징 폼",
            "[잇츠스킨]파워 10 감초줄렌 젤리패드",
            "[에스네이처]아쿠아 스쿠알란 세럼",
        ]
        path = [
            "https://www.beplain.co.kr/goods/goods_view.php?goodsNo=1000000078",
            "https://www.itsskin.com/goods/goods_view.php?goodsNo=1000001132",
            "https://snature.kr/product/피지모공진정속촉-에스네이처-아쿠아-스쿠알란-세럼-50ml-멀티테이너-천재세럼/83/",
        ]
    } else if (type === 'orpw'){
        url = [
            "https://images.innisfree.co.kr/upload/product/34505_p_S_450.jpg?T202306301107",
            "https://img.ssfshop.com/cmd/LB_750x1000/src/https://img.ssfshop.com/goods/BETY/22/11/09/GPYI22110916146_4_THNAIL_ORGINL_20230607170019635.jpg",
            "http://www.sidmool.com/shopimages/sidmool/0220030000692.jpg?1612518009",
        ]
        title = [
            "[이니스프리]레티놀 시카 흔적 앰플",
            "[랩코스]선티에이징 골프 선쿠션",
            "[시드물]달팽이 브라이트닝 리포좀 에센스",
        ]
        path = [
            "https://www.innisfree.com/kr/ko/ProductView.do?prdSeq=34505",
            "https://www.theamall.com/goods/detail?gno=254709&cate=663",
            "http://www.sidmool.com/shop/shopdetail.html?branduid=15&xcode=018&mcode=013&qnapage=1",
        ]
    } else if (type === 'ornw'){
        url = [
            "https://www.mamonde.com/kr/ko/product/__icsFiles/afieldfile/2021/10/22/110652133_final_Bacuchiol-retinol-cream_thumb_01_1.jpg_1.jpg",
            "https://www.primerabeauty.com/kr/ko/product/__icsFiles/afieldfile/2022/08/29/20220826_final_Youth-Radiance-Vitatinol-Serum_thumbnail01.png",
            "https://sitem.ssgcdn.com/83/98/84/item/1000508849883_i1_1100.jpg",
        ]
        title = [
            "[마몽드]바쿠치올 레티놀 크림",
            "[프리메라]유스 래디언스 비타티놀 세럼",
            "[랩코스]선티에이징 골프 선세럼",
        ]
        path = [
            "https://www.mamonde.com/kr/ko/product/bakuchiol-retinol-cream.html",
            "https://www.primerabeauty.com/kr/ko/product/youth-radiance-vitatinol-serum.html",
            "https://www.theamall.com/goods/detail?gno=250179&cate=663",
        ]
    } else if (type === 'drpt'){
        url = [
            "./imgs/drpt_1.png",
            "./imgs/drpt_2.png",
            "https://cdn-pro-web-211-225.cdn-nhncommerce.com/makeprem1_godomall_com/data/goods/22/03/10/1000000148/1000000148_detail_080.jpg",
        ]
        title = [
            "[딕셔니스트]아미노산 토너",
            "[딕셔니스트]아미노산 앰플",
            "[메이크프렘]인테카 수딩 크림",
        ]
        path = [
            "https://www.itsskin.com/goods/goods_view.php?goodsNo=1000001454",
            "https://www.itsskin.com/goods/goods_view.php?goodsNo=1000001453",
            "https://www.makeprem.com/goods/goods_view.php?goodsNo=1000000148",
        ]
    } else if (type === 'drnt'){
        url = [
            "https://skinfood.img49.makeshop.info/multi_image/1526_add0.jpg",
            "https://cdn-pro-web-40-6.cdn-nhncommerce.com/dalbapiedmot_godomall_com/data/goods/22/01/02/1000000102/1000000102_detail_020.png",
            "https://skinfood.img15.kr/data/content/spec/multi_image/220318_carrotpad_3.png",
        ]
        title = [
            "[스킨푸드]로열허니 프로폴리스 인리치 에센스",
            "[달바]화이트 트러플 비건 퍼스트 스프레이 세럼",
            "[스킨푸드]캐롯 카로틴 카밍 워터 패드",
        ]
        path = [
            "https://www.theskinfood.com/shop/shopdetail.html?branduid=1526",
            "https://dalba.co.kr/goods/goods_view.php?goodsNo=1000000102",
            "https://www.theskinfood.com/shop/shopdetail.html?branduid=10321739&xcode=014&mcode=001&scode=001&type=Y&sort=manual&cur_code=014001&GfDT=amd3UF0%3D",
        ]
    } else if (type === 'drpw'){
        url = [
            "http://cosrxinc.jpg3.kr/cosrximg/cosrx/product/The-Retinol0.1-Cream/1.png",
            "https://eltcosmetic.com/web/product/big/202212/74a73cca4eb35c8ec93e7a6ddad96903.jpg",
            "https://image.msscdn.net/images/goods_img/20230306/3124870/3124870_16781613817671_500.png",
        ]
        title = [
            "[코스알엑스]더 레티놀 0.1 크림",
            "[ELT]비타유스 비타민 아이크림",
            "[아떼]바이탈C좀 비건 잡티 토닝 앰플",
        ]
        path = [
            "http://cosrx.co.kr/m/product.html?branduid=1177598",
            "https://eltcosmetic.com/product/elt-비타유스-비타민-아이크림/38/",
            "https://m.lfmall.co.kr/app/product/CASTXX465XX?&etag1=002_A011_E043&etag2=1&etag3=35&etag4=385&cmd=getProductDetail&PROD_CD=CASTXX465XX&etag1=002_A011_E043&etag2=1&etag3=35&etag4=385",
        ]
    } else if (type === 'drnw'){
        url = [
            "./imgs/drnw_1.jpg",
            "https://www.sidmool.com/shopimages/sidmool/0220020000212.jpg?1665729130",
            "https://sitem.ssgcdn.com/83/98/84/item/1000508849883_i1_1100.jpg",
        ]
        title = [
            "[넘버즈인]4번 찰기탱탱 영양코팅 크림",
            "[시드물]황금 동백 스킨",
            "[랩코스]선티에이징 골프 선세럼",
        ]
        path = [
            "https://www.numbuzin.com/goods/goods_view.php?goodsNo=1000000060",
            "https://www.sidmool.com/shop/shopdetail.html?branduid=77028&xcode=020&mcode=031&qnapage=10",
            "https://www.theamall.com/goods/detail?gno=250179&cate=663",
        ]
    } else { // type === null
        
        url = [
            "https://image.oliveyoung.co.kr/uploads/images/goods/550/10/0000/0018/A00000018699104ko.jpg?l=ko"
        ]
        title = [
            '[대용량]에스트라 아토베리어365 하이드로 수딩크림 100ml'
        ]
        path = [
            "https://www.oliveyoung.co.kr/store/goods/getGoodsDetail.do?goodsNo=A000000186991&dispCatNo=90000010009&trackingCd=Best_Sellingbest"
        ]
    }

    return (
        <Recommend url={url} title={title} path={path}/>
    );
}

export function History() {
    let name = localStorage.getItem('username');
    if (name === null){
        name = '홍길동';
    }

    return (
        <div className='history'>
            <div className='history_con'>
                <Nav_my/>
                <div style={{marginLeft:'166px'}}>
                    <div className="makeup">
                        <Makeup />
                    </div>
                    <div className="recommend">
                        <p className="title">화장품 추천</p>
                        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                            <div className='fadein'>
                                <P><span style={{color:'black'}}>{name}</span>님의 피부타입을 분석하여<br/>기초 화장품을 추천드립니다.</P>
                                <P style={{marginTop:'70px'}}>Face Manager를 통해<br/><span style={{color:'black'}}>{name}</span>님의<br/>피부타입에 맞는 화장품을 사용해보세요.</P>
                            </div>
                            <Rec/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default History;
