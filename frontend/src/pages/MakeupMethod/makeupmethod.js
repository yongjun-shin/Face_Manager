import React from 'react';
import './makeupmethod.css'
import styled from 'styled-components';


function Makeup() {

  return (
    <div>
    <div className="makeup-method-01">
        <span class="makeup-method-01_sub1">
          현업 메이크업 전문가의 조언을 받아 화장법을 제안합니다.

          <br />
        </span>
        <span class="makeup-method-01_sub2">Makeup Method</span>
      </div>
    <div className = "makeup-forme">
      <span className="makeup-forme-01">
        ma propre façon de me maquiller.

        <br />
      </span>
      <span className="makeup-forme-02">
        나를 위한 화장

        <br />
      </span>
      <span className="makeup-forme-03">
        <br />
      </span>
      <span className="makeup-forme-04">
        스스로의 가꿈을 위한 기술을 위해

        <br />
        저희는 끊임없이 나아가고자 합니다.
      </span>
    </div>
  </div>
  );
}

export default Makeup;