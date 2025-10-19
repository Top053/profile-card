
        function updateTime() {
            const timeElement = document.querySelector('[data-testid="test-user-time"]');
            if (timeElement) {
                timeElement.textContent = Date.now();
            }
        }

        updateTime();

        setInterval(updateTime, 1000);

        document.addEventListener('DOMContentLoaded', function() {
            const avatarImg = document.querySelector('[data-testid="test-user-avatar"]');
            const fileInput = document.querySelector('[data-testid="test-avatar-upload"]');
            const urlInput = document.querySelector('[data-testid="test-avatar-url"]');
            const uploadButton = document.querySelector('#avatar-upload-button');

            if (!avatarImg || !fileInput || !urlInput || !uploadButton) return;

            avatarImg.addEventListener('click', () => fileInput.click());
            uploadButton.addEventListener('click', () => fileInput.click());

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files && e.target.files[0];
                if (!file) return;
                if (!file.type.startsWith('image/')) {
                    alert('Please choose an image file.');
                    return;
                }
                const reader = new FileReader();
                reader.onload = (ev) => {
                    avatarImg.src = ev.target.result; 
                    avatarImg.alt = 'Uploaded avatar image';
                };
                reader.readAsDataURL(file);
            });

            urlInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const url = urlInput.value.trim();
                    if (!url) return;
                    if (!/^https?:\/\//i.test(url)) {
                        alert('Please enter a valid URL that starts with http:// or https://');
                        return;
                    }
                    avatarImg.src = url;
                    avatarImg.alt = 'Avatar from URL';
                    urlInput.value = '';
                }
            });

            avatarImg.setAttribute('tabindex', '0');
            avatarImg.setAttribute('role', 'button');
            avatarImg.setAttribute('aria-label', 'Click or press Enter to change profile picture');

            avatarImg.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    fileInput.click();
                }
            });
        });