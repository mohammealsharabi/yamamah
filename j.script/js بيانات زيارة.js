 // Trip type toggle
 const tripTypeRadios = document.querySelectorAll('input[name="tripType"]');
 const returnDateField = document.getElementById('returnDate');
 const returnDateLabel = document.getElementById('returnDateLabel');
 
 tripTypeRadios.forEach(radio => {
     radio.addEventListener('change', function() {
         if (this.value === 'oneWay') {
             returnDateField.disabled = true;
             returnDateField.required = false;
             returnDateLabel.classList.remove('required-field');
             returnDateField.value = '';
         } else {
             returnDateField.disabled = false;
             returnDateField.required = true;
             returnDateLabel.classList.add('required-field');
         }
     });
 });
 
 // Set minimum dates for departure and return
 const today = new Date();
 const tomorrow = new Date(today);
 tomorrow.setDate(tomorrow.getDate() + 1);
 
 const formatDate = (date) => {
     const year = date.getFullYear();
     const month = String(date.getMonth() + 1).padStart(2, '0');
     const day = String(date.getDate()).padStart(2, '0');
     return `${year}-${month}-${day}`;
 };
 
 const departureDateInput = document.getElementById('departureDate');
 const returnDateInput = document.getElementById('returnDate');
 
 departureDateInput.min = formatDate(today);
 returnDateInput.min = formatDate(tomorrow);
 
 // Update return date minimum when departure date changes
 departureDateInput.addEventListener('change', function() {
     const departureDate = new Date(this.value);
     const nextDay = new Date(departureDate);
     nextDay.setDate(nextDay.getDate() + 1);
     returnDateInput.min = formatDate(nextDay);
     
     // If return date is before departure date, update it
     if (new Date(returnDateInput.value) <= departureDate) {
         returnDateInput.value = formatDate(nextDay);
     }
 });
 
 // Form submission
 document.getElementById('flightBookingForm').addEventListener('submit', function(e) {
     e.preventDefault();
     
     // Basic form validation
     const requiredFields = document.querySelectorAll('[required]:not(:disabled)');
     let isValid = true;
     
     requiredFields.forEach(field => {
         if (!field.value) {
             isValid = false;
             field.style.borderColor = '#e74c3c';
         } else {
             field.style.borderColor = '#ddd';
         }
     });
     
     if (isValid) {
         // Show success message
         document.getElementById('successMessage').style.display = 'block';
         document.getElementById('errorMessage').style.display = 'none';
         
         // Reset form after successful submission
         setTimeout(() => {
             document.getElementById('flightBookingForm').reset();
             // Re-enable return date if it was disabled
             returnDateField.disabled = false;
             returnDateField.required = true;
             returnDateLabel.classList.add('required-field');
             // Hide success message after some time
             document.getElementById('successMessage').style.display = 'none';
         }, 5000);
     } else {
         // Show error message
         document.getElementById('errorMessage').style.display = 'block';
         document.getElementById('successMessage').style.display = 'none';
     }
 });