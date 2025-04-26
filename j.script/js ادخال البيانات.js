 // Handle branches button click
 const branchesBtn = document.getElementById("branchesBtn");
 const branchesList = document.getElementById("branchesList");

 branchesBtn.addEventListener('click', function() {
   if (branchesList.style.display === "none" || branchesList.style.display === "") {
     branchesList.style.display = "block";
   } else {
     branchesList.style.display = "none";
   }
 });

 // Handle modals
 const warningModalElement = document.getElementById("customWarningModal");
 const closeButtonElement = document.getElementsByClassName("close")[0];
 const confirmationModalElement = document.getElementById("confirmationModal");
 const closeConfirmationBtn = document.getElementsByClassName("close-confirmation")[0];

 // Show warning modal on page load
 window.onload = function() {
   warningModalElement.style.display = "flex";
 };

 // Close warning modal and show confirmation
 closeButtonElement.onclick = function() {
   warningModalElement.style.display = "none";
   confirmationModalElement.style.display = "flex";
 };

 // Close confirmation modal
 closeConfirmationBtn.onclick = function() {
   confirmationModalElement.style.display = "none";
 };

 // Close modals when clicking outside
 window.onclick = function(event) {
   if (event.target === warningModalElement) {
     warningModalElement.style.display = "none";
     confirmationModalElement.style.display = "flex";
   } else if (event.target === confirmationModalElement) {
     confirmationModalElement.style.display = "none";
   }
 };

 document.addEventListener('DOMContentLoaded', function () {
   // متغيرات للخطوات
   let currentStep = 1;
   const totalSteps = 4;
   
   // عناصر الخطوات
   const formSteps = document.querySelectorAll('.form-step');
   const progressSteps = document.querySelectorAll('.progress-step');
   const progressLabels = document.querySelectorAll('.progress-label');
   const progressBar = document.getElementById('progressBar');
   
   // أزرار التنقل
   const nextToStep2Btn = document.getElementById('nextToStep2');
   const backToStep1Btn = document.getElementById('backToStep1');
   const nextToStep3Btn = document.getElementById('nextToStep3');
   const backToStep2Btn = document.getElementById('backToStep2');
   const nextToStep4Btn = document.getElementById('nextToStep4');
   const backToStep3Btn = document.getElementById('backToStep3');
   const submitFormBtn = document.getElementById('submitForm');
   
   // إضافة مستمعي الأحداث لأزرار التنقل
   nextToStep2Btn.addEventListener('click', () => validateAndNavigate(1, 2));
   backToStep1Btn.addEventListener('click', () => navigateToStep(1));
   nextToStep3Btn.addEventListener('click', () => validateAndNavigate(2, 3));
   backToStep2Btn.addEventListener('click', () => navigateToStep(2));
   nextToStep4Btn.addEventListener('click', () => validateAndNavigate(3, 4));
   backToStep3Btn.addEventListener('click', () => navigateToStep(3));
   
   // التحقق من صحة الخطوة والانتقال إلى الخطوة التالية
   function validateAndNavigate(currentStepNum, nextStepNum) {
     if (validateStep(currentStepNum)) {
       navigateToStep(nextStepNum);
       
       // إذا كانت الخطوة التالية هي الخطوة الأخيرة (المراجعة)، قم بملء ملخص البيانات
       if (nextStepNum === 4) {
         populateSummary();
       }
     }
   }
   
   // الانتقال إلى خطوة محددة
   function navigateToStep(stepNum) {
     // إخفاء جميع الخطوات
     formSteps.forEach(step => {
       step.classList.remove('active');
     });
     
     // إظهار الخطوة المستهدفة
     document.getElementById(`step${stepNum}`).classList.add('active');
     
     // تحديث شريط التقدم
     updateProgressBar(stepNum);
     
     // تحديث الخطوة الحالية
     currentStep = stepNum;
     
     // التمرير إلى أعلى النموذج
     window.scrollTo({
       top: document.querySelector('.container').offsetTop - 20,
       behavior: 'smooth'
     });
   }
   
   // تحديث شريط التقدم
   function updateProgressBar(stepNum) {
     // تحديث خطوات التقدم
     progressSteps.forEach((step, index) => {
       const stepNumber = index + 1;
       
       if (stepNumber < stepNum) {
         step.classList.add('completed');
         step.classList.remove('active');
       } else if (stepNumber === stepNum) {
         step.classList.add('active');
         step.classList.remove('completed');
       } else {
         step.classList.remove('active', 'completed');
       }
     });
     
     // تحديث تسميات التقدم
     progressLabels.forEach((label, index) => {
       const stepNumber = index + 1;
       
       if (stepNumber === stepNum) {
         label.classList.add('active');
       } else {
         label.classList.remove('active');
       }
     });
     
     // تحديث شريط التقدم
     const progressPercentage = ((stepNum - 1) / (totalSteps - 1)) * 100;
     document.querySelector('.progress-bar::after').style.width = `${progressPercentage}%`;
   }
   
   // التحقق من صحة الخطوة
   function validateStep(stepNum) {
     let isValid = true;
     let missingFields = [];
     
     // التحقق من الخطوة الأولى: البيانات الشخصية
     if (stepNum === 1) {
       // التحقق من الاسم
       const name = document.getElementById('name');
       if (!name.value.trim()) {
         isValid = false;
         name.style.borderColor = '#e74c3c';
         missingFields.push('الاسم الكامل');
       } else {
         name.style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
       
       // التحقق من رقم الجوال
       const phone = document.getElementById('phone');
       if (!phone.value.trim()) {
         isValid = false;
         phone.style.borderColor = '#e74c3c';
         missingFields.push('رقم الجوال');
       } else {
         phone.style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
       
       // التحقق من الجنس
       if (!document.querySelector('input[name="gender"]:checked')) {
         isValid = false;
         missingFields.push('الجنس');
       }
       
       // التحقق من الجنسية
       const nationality = document.getElementById('nationality');
       if (!nationality.value) {
         isValid = false;
         nationality.style.borderColor = '#e74c3c';
         missingFields.push('الجنسية');
       } else {
         nationality.style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
       
       // التحقق من تاريخ الميلاد
       const dob = document.getElementById('dob');
       if (!dob.value) {
         isValid = false;
         dob.style.borderColor = '#e74c3c';
         missingFields.push('تاريخ الميلاد');
       } else {
         dob.style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
     }
     
     // التحقق من الخطوة الثانية: معلومات الجواز
     else if (stepNum === 2) {
       // التحقق من رقم الجواز
       const passportNumber = document.getElementById('passportNumber');
       if (!passportNumber.value.trim()) {
         isValid = false;
         passportNumber.style.borderColor = '#e74c3c';
         missingFields.push('رقم الجواز');
       } else {
         passportNumber.style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
       
       // التحقق من تاريخ انتهاء صلاحية الجواز
       const passportExpiry = document.getElementById('passportExpiry');
       if (!passportExpiry.value) {
         isValid = false;
         passportExpiry.style.borderColor = '#e74c3c';
         missingFields.push('تاريخ انتهاء صلاحية الجواز');
       } else {
         passportExpiry.style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
     }
     
     // التحقق من الخطوة الثالثة: المستندات
     else if (stepNum === 3) {
       // التحقق من صورة الجواز
       const passport = document.getElementById('passport');
       if (!passport.files || passport.files.length === 0) {
         isValid = false;
         document.querySelector('.file-input-label').style.borderColor = '#e74c3c';
         missingFields.push('صورة الجواز');
       } else {
         document.querySelector('.file-input-label').style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
       
       // التحقق من الصورة الشخصية
       const personalPhoto = document.getElementById('personalPhoto');
       if (!personalPhoto.files || personalPhoto.files.length === 0) {
         isValid = false;
         document.querySelectorAll('.file-input-label')[1].style.borderColor = '#e74c3c';
         missingFields.push('الصورة الشخصية');
       } else {
         document.querySelectorAll('.file-input-label')[1].style.borderColor = 'rgba(255, 215, 0, 0.2)';
       }
       
       // التحقق من الموافقة على الشروط
       const termsAgreement = document.getElementById('termsAgreement');
       if (!termsAgreement.checked) {
         isValid = false;
         missingFields.push('الموافقة على الشروط والأحكام');
       }
     }
     
     // التحقق من الخطوة الرابعة: المراجعة والتأكيد
     else if (stepNum === 4) {
       // التحقق من تأكيد صحة البيانات
       const dataConfirmation = document.getElementById('dataConfirmation');
       if (!dataConfirmation.checked) {
         isValid = false;
         missingFields.push('تأكيد صحة البيانات');
       }
     }
     
     // إظهار رسالة الخطأ إذا كانت هناك حقول مفقودة
     if (!isValid) {
       const errorMessage = document.getElementById('errorMessage');
       errorMessage.style.display = 'block';
       errorMessage.innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 10px; vertical-align: middle;">
           <circle cx="12" cy="12" r="10"></circle>
           <line x1="15" y1="9" x2="9" y2="9"></line>
           <line x1="15" y1="15" x2="9" y2="15"></line>
           <line x1="12" y1="18" x2="12" y2="12"></line>
         </svg>
         يرجى التأكد من إدخال جميع البيانات المطلوبة بشكل صحيح.<br>
         الحقول التالية مطلوبة أو بها خطأ: ${missingFields.join('، ')}
       `;
       
       // التمرير إلى رسالة الخطأ
       errorMessage.scrollIntoView({ behavior: 'smooth', block: 'start' });
       
       // إخفاء رسالة الخطأ بعد 5 ثوانٍ
       setTimeout(() => {
         errorMessage.style.display = 'none';
       }, 5000);
     } else {
       document.getElementById('errorMessage').style.display = 'none';
     }
     
     return isValid;
   }
   
   // ملء ملخص البيانات في الخطوة الرابعة
   function populateSummary() {
     const summaryContainer = document.getElementById('summaryContainer');
     
     // الحصول على قيم النموذج
     const name = document.getElementById('name').value;
     const phone = document.getElementById('phone').value;
     const email = document.getElementById('email').value || 'غير محدد';
     const gender = document.querySelector('input[name="gender"]:checked')?.value === 'male' ? 'ذكر' : 'أنثى';
     const nationality = document.getElementById('nationality').options[document.getElementById('nationality').selectedIndex].text;
     const dob = document.getElementById('dob').value;
     const passportNumber = document.getElementById('passportNumber').value;
     const passportExpiry = document.getElementById('passportExpiry').value;
     const passportIssueDate = document.getElementById('passportIssueDate').value || 'غير محدد';
     const passportIssuingCountry = document.getElementById('passportIssuingCountry').value ? 
       document.getElementById('passportIssuingCountry').options[document.getElementById('passportIssuingCountry').selectedIndex].text : 
       'غير محدد';
     
     // تنسيق التواريخ
     const formattedDob = formatDate(dob);
     const formattedPassportExpiry = formatDate(passportExpiry);
     const formattedPassportIssueDate = passportIssueDate ? formatDate(passportIssueDate) : 'غير محدد';
     
     // إنشاء HTML للملخص
     summaryContainer.innerHTML = `
       <div class="summary-section">
         <h3>البيانات الشخصية</h3>
         <div class="summary-item">
           <span class="summary-label">الاسم الكامل:</span>
           <span class="summary-value">${name}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">رقم الجوال:</span>
           <span class="summary-value">${phone}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">البريد الإلكتروني:</span>
           <span class="summary-value">${email}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">الجنس:</span>
           <span class="summary-value">${gender}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">الجنسية:</span>
           <span class="summary-value">${nationality}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">تاريخ الميلاد:</span>
           <span class="summary-value">${formattedDob}</span>
         </div>
       </div>
       
       <div class="summary-section">
         <h3>معلومات الجواز</h3>
         <div class="summary-item">
           <span class="summary-label">رقم الجواز:</span>
           <span class="summary-value">${passportNumber}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">تاريخ إصدار الجواز:</span>
           <span class="summary-value">${formattedPassportIssueDate}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">تاريخ انتهاء صلاحية الجواز:</span>
           <span class="summary-value">${formattedPassportExpiry}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">بلد إصدار الجواز:</span>
           <span class="summary-value">${passportIssuingCountry}</span>
         </div>
       </div>
       
       <div class="summary-section">
         <h3>المستندات المرفقة</h3>
         <div class="summary-item">
           <span class="summary-label">صورة الجواز:</span>
           <span class="summary-value">${document.getElementById('passportFileName').textContent || 'تم الإرفاق'}</span>
         </div>
         <div class="summary-item">
           <span class="summary-label">الصورة الشخصية:</span>
           <span class="summary-value">${document.getElementById('photoFileName').textContent || 'تم الإرفاق'}</span>
         </div>
       </div>
     `;
   }
   
   // تنسيق التاريخ
   function formatDate(dateString) {
     if (!dateString) return '';
     
     const date = new Date(dateString);
     const options = { year: 'numeric', month: 'long', day: 'numeric' };
     
     try {
       return date.toLocaleDateString('ar-SA', options);
     } catch (e) {
       // في حالة عدم دعم اللغة العربية
       return date.toLocaleDateString('en-US', options);
     }
   }
   
   // معالجة تغيير ملف الجواز
   document.getElementById('passport').addEventListener('change', function(e) {
     const fileName = e.target.files[0]?.name || '';
     document.getElementById('passportFileName').textContent = fileName;
     document.getElementById('passportLabel').textContent = fileName ? 'تم اختيار الملف' : 'اختر صورة الجواز';
   });

   // معالجة تغيير الصورة الشخصية
   document.getElementById('personalPhoto').addEventListener('change', function(e) {
     const fileName = e.target.files[0]?.name || '';
     document.getElementById('photoFileName').textContent = fileName;
     document.getElementById('photoLabel').textContent = fileName ? 'تم اختيار الملف' : 'اختر الصورة الشخصية';
   });
   
   // معالجة تقديم النموذج
   document.getElementById('registrationForm').addEventListener('submit', function(e) {
     e.preventDefault();
     
     // التحقق من صحة الخطوة الأخيرة
     if (validateStep(4)) {
       // إظهار رسالة النجاح
       document.getElementById('successMessage').style.display = 'block';
       document.getElementById('successMessage').innerHTML = `
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 10px; vertical-align: middle;">
           <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
           <polyline points="22 4 12 14.01 9 11.01"></polyline>
         </svg>
         تم تسجيل بياناتك بنجاح! يلزم تقديم ضمانة لعودة المعتمر.
         <button onclick="showGuaranteeModal()" style="margin-top:10px; padding:8px 20px; background: var(--primary-color); color:white; border:none; border-radius:5px; cursor:pointer;">
           المتابعة لإدخال بيانات الضمانة
         </button>
       `;
       
       // التمرير إلى رسالة النجاح
       document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth', block: 'start' });
     }
   });
   
   // إظهار نافذة الضمانة
   window.showGuaranteeModal = function() {
     document.getElementById('guaranteeModal').style.display = 'flex';
   };
   
   // إغلاق نافذة الضمانة
   document.querySelector('.close-modal').addEventListener('click', function() {
     document.getElementById('guaranteeModal').style.display = 'none';
   });
   
   // تحديث متطلبات الضمانة بناءً على الاختيار
   document.getElementById('guaranteeType').addEventListener('change', function() {
     document.querySelectorAll('.requirements').forEach(el => {
       el.style.display = 'none';
     });
     
     const selectedType = this.value;
     if (selectedType) {
       document.querySelector(`.requirements.${selectedType}`).style.display = 'block';
     }
   });
   
   // تأكيد بيانات الضمانة
   document.getElementById('confirmGuarantee').addEventListener('click', function() {
     const guaranteeType = document.getElementById('guaranteeType').value;
     
     if (!guaranteeType) {
       alert('يرجى اختيار نوع الضمانة');
       return;
     }
     
     alert('تم إكمال التسجيل بنجاح!');
     document.getElementById('guaranteeModal').style.display = 'none';
     
     // إعادة تعيين النموذج
     document.getElementById('registrationForm').reset();
     document.querySelectorAll('.file-name').forEach(el => el.textContent = '');
     document.getElementById('passportLabel').textContent = 'اختر صورة الجواز';
     document.getElementById('photoLabel').textContent = 'اختر الصورة الشخصية';
     
     // العودة إلى الخطوة الأولى
     navigateToStep(1);
     
     // تحديث رسالة النجاح
     document.getElementById('successMessage').innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 10px; vertical-align: middle;">
         <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
         <polyline points="22 4 12 14.01 9 11.01"></polyline>
       </svg>
       تم تسجيل بياناتك والضمانة بنجاح! سنتواصل معك قريباً.
     `;
     document.getElementById('successMessage').style.display = 'block';
   });
 });