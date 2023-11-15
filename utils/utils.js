

export function markRequiredInputs() {
    const inputElements = document.querySelectorAll('input');
  
    inputElements.forEach(inputEle => {
      if (inputEle.hasAttribute('required')) {
        const labelForInput = document.querySelector(`label[for="${inputEle.id}"]`);
        
        if (labelForInput) {
          labelForInput.innerHTML += ' <span class="text-red-600 mx-2">*</span>';
        }
        let spans = labelForInput.querySelectorAll('span');
      if (spans.length > 1) {
        labelForInput.removeChild(spans[spans.length - 1]);
      }
      }
    });
  }

