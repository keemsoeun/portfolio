$(document).ready(function() {
    // 토스트 메시지 표시 함수
    function showToast(message, isError = false) {
        const $toast = $('.toast');
        $toast.removeClass('red show')
            .toggleClass('red', isError)
            .children('p')
            .empty()
            .html(message);
            
        $toast.addClass('show');
        setTimeout(() => $toast.removeClass('show'), 3000);
    }

    // 클립보드 초기화 함수
    function initClipboard(id, successMessage) {
        const clipboard = new ClipboardJS(`#${id}`);
        
        clipboard.on('success', (e) => {
            console.info('Text:', e.text);
            showToast(successMessage);
        });

        clipboard.on('error', () => {
            showToast('복사 오류, 텍스트 드래그 후 복사해주세요', true);
        });
    }

    // 각 버튼 초기화
    initClipboard('contactEmail', '이메일 주소가 복사되었어요');
    initClipboard('contactAnother', '이메일 주소가 복사되었어요');
    initClipboard('contactPhone', '휴대폰 번호가 복사되었어요');
});