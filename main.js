
      const oneBtn = document.getElementById('calc-one');
      const towBtn = document.getElementById('calc-tow');
      const threeBtn = document.getElementById('calc-three');
      const fourBtn = document.getElementById('calc-four');
      const fiveBtn = document.getElementById('calc-five');
      const sexBtn = document.getElementById('calc-sex');
      const sevenBtn = document.getElementById('calc-seven');
      const eightBtn = document.getElementById('calc-eight');
      const nineBtn = document.getElementById('calc-nine');

      const decimalBtn = document.getElementById('decimal');
      const clearBtn = document.getElementById('calc-clear');
      const backspaceBtn = document.getElementById('calc-backspace');
      const displayValElement = document.getElementById('calc-display-val');
      let calcNumBtn = document.getElementsByClassName('calc-btn-num');
      let calcOperatorBtn = document.getElementsByClassName(
        'calc-btn-operator',
      );

      for (let i = 0; i < calcNumBtn.length; i++) {
        calcNumBtn[i].addEventListener(click, updateDisplayVal, false);
      }

      for (let i = 0; i < calcOperatorBtn.length; i++) {
        calcOperatorBtn[i].addEventListener(click, performOperator, false);
      }
      