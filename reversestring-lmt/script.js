// script.js

class StringReverser {
    constructor(minLength = 3) {
      this.minLength = minLength;
    }
  
    reverse(input) {
      if (typeof input !== 'string') {
        console.error("Invalid input: not a string");
        throw new Error("Input must be a string");
      }
      if (input.length < this.minLength) {
        console.warn(`Input too short: Minimum length is ${this.minLength}`);
        throw new Error(`Input must be at least ${this.minLength} characters long`);
      }
      const reversed = input.split('').reverse().join('');
      console.log(`Reversed string: ${reversed}`);
      return reversed;
    }
  }
  
  class UIHandler {
    constructor(reverser) {
      this.reverser = reverser;
      this.inputEl = document.getElementById('userInput');
      this.resultEl = document.getElementById('result');
      this.reverseBtn = document.getElementById('reverseBtn');
      this.clearBtn = document.getElementById('clearBtn');
  
      this.initListeners();
    }
  
    initListeners() {
      this.reverseBtn.addEventListener('click', () => this.handleReverse());
      this.clearBtn.addEventListener('click', () => this.handleClear());
    }
  
    handleReverse() {
      try {
        const input = this.inputEl.value.trim();
        const result = this.reverser.reverse(input);
        this.resultEl.textContent = `Reversed: ${result}`;
      } catch (error) {
        alert(error.message);
        this.resultEl.textContent = '';
      }
    }
  
    handleClear() {
      this.inputEl.value = '';
      this.resultEl.textContent = '';
      console.log("Input and result cleared");
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const reverser = new StringReverser();
    new UIHandler(reverser);
  });
  