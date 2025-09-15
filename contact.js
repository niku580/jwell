// Select all form fields
const formFields = document.querySelectorAll('input, textarea');

// Add animation on focus
formFields.forEach((field) => {
  field.addEventListener('focus', () => {
    field.classList.add(
      'scale-[1.02]',
      'shadow-md',
      'transition-transform',
      'duration-300',
      'ring-2',
      'ring-[#948979]'
    );
  });

  field.addEventListener('blur', () => {
    field.classList.remove(
      'scale-[1.02]',
      'shadow-md',
      'transition-transform',
      'duration-300',
      'ring-2',
      'ring-[#948979]'
    );
  });
});
