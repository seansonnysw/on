/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';

import 'react-image-gallery/styles/css/image-gallery.css';
import 'react-toastify/dist/ReactToastify.css';
// import {Toastify__toast} from './toastify.css'


import './Home.css';
import '../fonts.css';


const Home = () => {
    const phoneNumber = '010-4334-8329'; // Updated phone number
    const [selectedDate] = useState(new Date('2023-07-08'));
    const replacedImage = "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/up.png"
    const toggleImage = "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/down.png"
    const textToCopy = '국민은행 56210101412453';
    const textToCopy2 = '국민은행 56210201330778';
    const textToCopy3 = '신한은행 110494677408';
    const textToCopy4 = 'seungwoo-onyu.com';
    // const handleClick = () => {
    //   toast("Hello, world!", {
    //     toastClassName: 'custom-toast',
    // });

    const handleCopy1 = () => {
        // Copy was successful
        toast('손중식님의 계좌 번호가 복사되었습니다.');
    };
    const handleCopy2 = () => {
      // Copy was successful
      toast('손승우님의 계좌 번호가 복사되었습니다.');
  };
  const handleCopy3 = () => {
    // Copy was successful
    toast('박온유님의 계좌 번호가 복사되었습니다.');
};
    const handleCopyLink = () => {
      // Copy was successful
      toast('링크가 복사되었습니다.');
  };

    const getDday = () => {
        const today = new Date();
        const kstOffset = 9; // KST offset in hours
        const utcOffset = today.getTimezoneOffset() / 60; // Get UTC offset in hours
        const timeDiff = (selectedDate.getTime() - today.getTime()) + (kstOffset - utcOffset) * 60 * 60 * 1000;
        const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        return daysDiff;
      };
      const [isToggled, setIsToggled] = useState(false);
      const [isToggled2, setIsToggled2] = useState(false);

      const handleToggle = () => {
        setIsToggled(!isToggled);
      };
    
      const handleToggle2 = () => {
        setIsToggled2(!isToggled2);
      };
    
    // const path1 = "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/"
    // const path2 = "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/"
    const images = [
        {
          original:"https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/1.jpg",
          thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/1.jpg",
        },
        {
          original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/2.jpg",
          thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/2.jpg",
        },
        {
          original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/3.jpg",
          thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/3.jpg",
        },
        {
          original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/4.jpg",
          thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/4.jpg",
        },
        {
          original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/5.jpg",
          thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/5.jpg",
        },
        {
            original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/6.jpg",
            thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/6.jpg",
          },
          {
            original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/7.jpg",
            thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/7.jpg",
          },
          {
            original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/8.jpg",
            thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/8.jpg",
          },
          {
            original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/9.jpg",
            thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/9.jpg",
          },
          {
            original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/11.jpg",
            thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/11.jpg",
          },
          {
            original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/12.jpg",
            thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/12.jpg",
          },
          {
            original: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/13.jpg",
            thumbnail: "https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/photo/13.jpg",
          },
      ];
    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };
  return (
    <div className="home-container">
      <h3>Wedding Inviation</h3>
      <h3>저희 결혼합니다</h3>
      <img src="https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/5.jpeg" alt="Wedding Photo" />
      <div className="date-container">
        <h3>2023. 07. 08 토요일 오후 12시</h3>
        <h2>손승우 & 박온유</h2>
        <br/>
        <br/>
      </div>
      <div className="invitation-title">
      <br/>
        <h3> * </h3>
        <h3> 초대합니다 </h3>
        <br/>
      </div>
      <div className="invitation-words">
        <div> 한눈에 서로를 알아보고<br /> 한 마음이 되어 <br /> 사랑의 결실을 이루려 합니다. <br />앞으로 평생 아끼고 사랑하겠습니다.<br /> 부디 귀한 시간 내주셔서<br />저희의 다짐을 축복해 주시면 감사하겠습니다.</div>
        <br/>
      </div>
      <img src="https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/6.jpeg" alt="Wedding Photo" />
      <div className="family-contacts">
        <div>손중식, 김양희 의 차남 승우
           {/* <img
                src="https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/phone.png"
                alt="Phone"
                className="phone-icon"
                onClick={handlePhoneClick}
            /> */}
        </div>

        <div> 박재령, 방은하 의 장녀 온유</div>
        <div>
        <br />2023.07.08 토요일 오후12시
        <br /> 롯데호텔 소공, 3층 사파이어볼룸</div>
      </div>
      <br></br>
      <br></br>
      <div className="invitation-title">
        <h3> * </h3>
        <h3> 웨딩갤러리 </h3>
        <br/>
        <ImageGallery items={images} />
      </div>
      <div className="dday">
        <br></br>
        <br/>
        <img src="https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/calendar.jpg" alt="Wedding Photo" />
        <div>결혼식 까지 {getDday()} 일 남았습니다.</div>
        <br/>
      </div>
      <div className="invitation-title">
      <br/>
        <h3> * </h3>
        <h3> 오시는 길 </h3>
        <br/>
      </div>
      <div className="invitation-words">
        <div> 롯데호텔 소공, 3층 사파이어볼룸<br />서울 중구 을지로 30</div>
      </div>
      <a href="https://m.map.kakao.com/actions/searchView?q=%EC%84%9C%EC%9A%B8+%EC%A4%91%EA%B5%AC+%EC%9D%84%EC%A7%80%EB%A1%9C+30&wxEnc=LVSOTP&wyEnc=QNLTTMN&lvl=4#!/all/map/place" target="_blank" rel="noopener noreferrer">
        <img
          src="https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/map.jpg"
          alt="Image Description"
        />
      </a>
      <div className="transportation-words">
        <div> 
            <h3>지하철</h3>
            1호선 시청역<br />
            - 도보 10분<br />
            - 지하철 출구: 5번 출구<br />
            - 도보 10분<br />
            <br />
            2호선 을지로 입구역<br />
            - 지하철 출구: 8번 출구<br />
            - 도보 1분<br />
            <br />
            <br />
            <h3>버스</h3><br />
            롯데 백화점 앞<br />
            - 지선(초록) : 7017, 7021<br />
            - 간선(파랑) : 100, 143, 151, 152, 202, 261, 262, 405, 501, 701, 702A, 702B, 705<br />
            - 간선(심야) : N10, N30, N40<br />
            <br />
        롯데 영프라자 앞<br />
        - 간선(파랑) : 162, 163, 201, 506 <br />
        - 광역(빨강) : 2500, 9701 <br />
        - 직행: 9301 <br />
        - 간선(심야) : N30 <br />
        <br />
        롯데 영프라자 맞은편 (명동 입구) <br />
        - 지선(초록) : 7017, 7021, 7022 <br />
        - 간선(파랑) : 100, 103, 105, 143, 151, 152, 162, 163, 201, 202, 261, 262, 401, 406, 408, 500, 504, 701, 704 <br />
        - 간선(심야) : N10, N30 <br />
        <br />
        명동 국민은행 앞 <br />
        - 광역(빨강) : 7900, 8800, 9401, 9401B, M4101, M4102, M4108, M5107, M5115, M5121 <br />
        - 직행: 1005-1, 1150, 5000, 5005, 5007, 5500, 5500-1, 5500-2, 8100, 9000, 9001, 9003, 9007, 9300, 9301 <br />
        - 공항: 6001, 6015 <br />
        <br />
        롯데호텔 앞 <br />
        - 공항: 6701 <br />
        <br />
        <h3>기타</h3> <br />
        [주차 안내] <br />
        백화점 주차 시, 을지로 방향의 호텔 주차장 입구 또는 소공동 방향의 백화점 주차장을 이용하실 수 있습니다. 3시간 무료주차 가능 <br />
      </div>
      <div className="invitation-title">
      <br/>
        <h3> * </h3>
        <h3> 안내사항 </h3>
        <br/>
      </div>
      <h3> 식장 내 홀 위치 </h3>
        에스컬레이터 타고 3층 사파이어볼룸으로 올라오세요.
    </div>
    <div className="invitation-title">
    <br/>
    <br/>
        <h3> * </h3>
        <h3> 마음 전하실 곳 확인하기 </h3>
        <br/>
        <div className="account-division">
          <div className="top-container">
            <div className="show-text">신랑측 계좌번호 보기</div>
            <img
              src={isToggled ? replacedImage : toggleImage}
              alt="Toggle Image"
              className={`toggle-image ${isToggled ? 'toggled' : ''}`}
              onClick={handleToggle}
            />
          </div>
        {isToggled && (
          <div className="content-division">
              <CopyToClipboard text={textToCopy} onCopy={handleCopy1}>
              <div className="content-division">
                <p>국민은행 56210101412453 손중식</p>
              </div>
            </CopyToClipboard>
   
            <CopyToClipboard text={textToCopy2} onCopy={handleCopy2}>
              <div className="content-division">
              <p>국민은행 56210201330778 손승우</p>
              </div>
            </CopyToClipboard>

            {/* <img src="https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/up.png" className="tt" alt="Wedding Photo" />  */}
          </div>
        )}
          <div className="top-container">
            <div className="show-text">신부측 계좌번호 보기</div>
            <img
              src={isToggled2 ? replacedImage : toggleImage}
              alt="Toggle Image"
              className={`toggle-image ${isToggled2 ? 'toggled' : ''}`}
              onClick={handleToggle2}
            />
        </div>
        {isToggled2 && (
          <div className="content-division">
              <CopyToClipboard text={textToCopy3} onCopy={handleCopy3}>
              <div className="content-division">
              <p>신한은행 110494677408 Park On Yu</p>
              </div>
            </CopyToClipboard>
            {/* <div> 복사하기</div> */}
          </div>
        )}
        </div>
      </div>


      {/* <div className="invitation-title">
        <h3> * </h3>
        <h3> 축하의 말 전하기 </h3>
      </div> */}
      <br/>
      <br/>

      <div class="shareLink">
      <h3> * </h3>
        <h3>청첩장 링크 복사하기</h3> 
        <CopyToClipboard text={textToCopy4} onCopy={handleCopyLink}>
              <div className="content-division">
              <img src="https://matchu-users-profile.s3.ap-northeast-2.amazonaws.com/sw/share.jpeg" className="share" alt="link share" />
              </div>
            </CopyToClipboard>
      </div>
    </div>
  );
};

export default Home;