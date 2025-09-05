 // Photo upload functionality
        document.getElementById('photoInput').addEventListener('change', function(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('profileImg').src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });
        
        // Form validation
        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let valid = true;
            
            if (!name) {
                document.getElementById('nameError').textContent = 'Name is required.';
                valid = false;
            } else {
                document.getElementById('nameError').textContent = '';
            }
            
            if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('emailError').textContent = 'Valid email is required.';
                valid = false;
            } else {
                document.getElementById('emailError').textContent = '';
            }
            
            if (!subject) {
                document.getElementById('subjectError').textContent = 'Subject is required.';
                valid = false;
            } else {
                document.getElementById('subjectError').textContent = '';
            }
            
            if (!message) {
                document.getElementById('messageError').textContent = 'Message is required.';
                valid = false;
            } else {
                document.getElementById('messageError').textContent = '';
            }
            
            if (valid) {
                alert('Form submitted successfully!');
                // Here you can add code to actually send the form data (e.g., via fetch)
                this.reset();
            }
        });
