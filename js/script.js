// DOM이 로드된 후 실행
document.addEventListener('DOMContentLoaded', function() {
    console.log('Codex Test Project 초기화 완료');
    
    // 페이지 로드 애니메이션
    addFadeInAnimation();
    
    // 네비게이션 스무스 스크롤
    setupSmoothScroll();
    
    // 메인 테스트 버튼 이벤트
    setupMainTestButton();
    
    // 연락처 폼 이벤트
    setupContactForm();
    
    // 페이지 스크롤 이벤트
    setupScrollEffects();
});

// 페이지 요소들에 페이드인 애니메이션 추가
function addFadeInAnimation() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });
}

// 네비게이션 스무스 스크롤 설정
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 메인 테스트 버튼 설정
function setupMainTestButton() {
    const testBtn = document.getElementById('testBtn');
    
    if (testBtn) {
        testBtn.addEventListener('click', function() {
            this.classList.add('pulse');
            showTestResults('메인 테스트가 실행되었습니다!', 'success');
            
            // 펄스 애니메이션 제거
            setTimeout(() => {
                this.classList.remove('pulse');
            }, 2000);
        });
    }
}

// 연락처 폼 설정
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // 폼 검증
            if (validateForm(name, email, message)) {
                // 폼 제출 시뮬레이션
                submitForm(name, email, message);
            }
        });
    }
}

// 폼 검증
function validateForm(name, email, message) {
    if (!name || name.trim().length < 2) {
        showTestResults('이름은 2글자 이상이어야 합니다.', 'error');
        return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        showTestResults('올바른 이메일 주소를 입력해주세요.', 'error');
        return false;
    }
    
    if (!message || message.trim().length < 10) {
        showTestResults('메시지는 10글자 이상이어야 합니다.', 'error');
        return false;
    }
    
    return true;
}

// 폼 제출 시뮬레이션
function submitForm(name, email, message) {
    showTestResults('폼 제출 중...', 'info');
    
    // 제출 시뮬레이션 (2초 후 완료)
    setTimeout(() => {
        showTestResults(`안녕하세요 ${name}님! 메시지가 성공적으로 전송되었습니다.`, 'success');
        document.getElementById('contactForm').reset();
    }, 2000);
}

// 스크롤 효과 설정
function setupScrollEffects() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        const scrollTop = window.pageYOffset;
        
        // 헤더 투명도 조절
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(102, 126, 234, 0.95)';
        } else {
            header.style.backgroundColor = '';
        }
    });
}

// HTML 테스트 함수
function htmlTest() {
    const testResults = [];
    
    // HTML 요소 테스트
    const elements = ['header', 'nav', 'main', 'section', 'footer'];
    elements.forEach(tag => {
        const element = document.querySelector(tag);
        if (element) {
            testResults.push(`✅ ${tag} 요소 존재`);
        } else {
            testResults.push(`❌ ${tag} 요소 없음`);
        }
    });
    
    // 폼 요소 테스트
    const formElements = document.querySelectorAll('input, textarea, button');
    testResults.push(`✅ 폼 요소 ${formElements.length}개 발견`);
    
    // 링크 테스트
    const links = document.querySelectorAll('a');
    testResults.push(`✅ 링크 ${links.length}개 발견`);
    
    showTestResults(`HTML 테스트 완료:\n${testResults.join('\n')}`, 'success');
}

// CSS 테스트 함수
function cssTest() {
    const testResults = [];
    
    // CSS 스타일 테스트
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    
    // 폰트 패밀리 확인
    const fontFamily = computedStyle.fontFamily;
    testResults.push(`✅ 폰트: ${fontFamily}`);
    
    // 배경색 확인
    const backgroundColor = computedStyle.backgroundColor;
    testResults.push(`✅ 배경색: ${backgroundColor}`);
    
    // CSS 애니메이션 테스트
    const animatedElements = document.querySelectorAll('.fade-in, .pulse');
    testResults.push(`✅ 애니메이션 요소 ${animatedElements.length}개`);
    
    // 반응형 테스트
    const viewport = window.innerWidth;
    testResults.push(`✅ 뷰포트 너비: ${viewport}px`);
    
    if (viewport <= 768) {
        testResults.push(`📱 모바일 뷰`);
    } else {
        testResults.push(`💻 데스크톱 뷰`);
    }
    
    showTestResults(`CSS 테스트 완료:\n${testResults.join('\n')}`, 'success');
}

// JavaScript 테스트 함수
function jsTest() {
    const testResults = [];
    
    // JavaScript 기능 테스트
    testResults.push(`✅ JavaScript 실행 가능`);
    testResults.push(`✅ DOM 조작 가능`);
    testResults.push(`✅ 이벤트 리스너 동작`);
    
    // 브라우저 정보
    testResults.push(`✅ 브라우저: ${navigator.userAgent.split(' ')[0]}`);
    testResults.push(`✅ 언어: ${navigator.language}`);
    
    // 로컬 스토리지 테스트
    try {
        localStorage.setItem('test', 'codex-test');
        const testValue = localStorage.getItem('test');
        if (testValue === 'codex-test') {
            testResults.push(`✅ 로컬 스토리지 동작`);
            localStorage.removeItem('test');
        }
    } catch (e) {
        testResults.push(`❌ 로컬 스토리지 오류: ${e.message}`);
    }
    
    // 날짜/시간 테스트
    const now = new Date();
    testResults.push(`✅ 현재 시간: ${now.toLocaleString()}`);
    
    showTestResults(`JavaScript 테스트 완료:\n${testResults.join('\n')}`, 'success');
}

// API 테스트 함수
async function apiTest() {
    showTestResults('API 테스트 실행 중...', 'info');
    
    const testResults = [];
    
    try {
        // JSONPlaceholder API 테스트
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        
        if (response.ok) {
            const data = await response.json();
            testResults.push(`✅ API 호출 성공 (상태: ${response.status})`);
            testResults.push(`✅ 데이터 수신: 제목 "${data.title}"`);
        } else {
            testResults.push(`❌ API 호출 실패 (상태: ${response.status})`);
        }
    } catch (error) {
        testResults.push(`❌ API 오류: ${error.message}`);
    }
    
    // 네트워크 상태 확인
    if (navigator.onLine) {
        testResults.push(`✅ 네트워크 연결 상태: 온라인`);
    } else {
        testResults.push(`❌ 네트워크 연결 상태: 오프라인`);
    }
    
    // Fetch API 지원 확인
    if (typeof fetch !== 'undefined') {
        testResults.push(`✅ Fetch API 지원`);
    } else {
        testResults.push(`❌ Fetch API 미지원`);
    }
    
    showTestResults(`API 테스트 완료:\n${testResults.join('\n')}`, 'success');
}

// 테스트 결과 표시 함수
function showTestResults(message, type = 'info') {
    const testResultsDiv = document.getElementById('testResults');
    
    if (testResultsDiv) {
        // 메시지 타입에 따른 클래스 설정
        let className = 'test-info';
        switch (type) {
            case 'success':
                className = 'test-success';
                break;
            case 'error':
                className = 'test-error';
                break;
            case 'info':
            default:
                className = 'test-info';
                break;
        }
        
        // 결과 표시
        testResultsDiv.innerHTML = `
            <div class="${className}">
                <h3>테스트 결과</h3>
                <pre>${message}</pre>
                <small>실행 시간: ${new Date().toLocaleTimeString()}</small>
            </div>
        `;
        
        // 결과 섹션으로 스크롤
        testResultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// 유틸리티 함수들
const Utils = {
    // 랜덤 색상 생성
    getRandomColor: function() {
        const colors = ['#667eea', '#764ba2', '#74b9ff', '#0984e3', '#e17055', '#d63031', '#00b894', '#00a085'];
        return colors[Math.floor(Math.random() * colors.length)];
    },
    
    // 요소 하이라이트
    highlightElement: function(selector) {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.add('highlight');
            setTimeout(() => {
                element.classList.remove('highlight');
            }, 2000);
        }
    },
    
    // 디바운스 함수
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// 전역 객체로 노출
window.CodexTest = {
    htmlTest,
    cssTest,
    jsTest,
    apiTest,
    showTestResults,
    Utils
};

// 콘솔에 환영 메시지 출력
console.log(`
%c Codex Test Project
%c 테스트용 웹페이지가 성공적으로 로드되었습니다!
%c 
사용 가능한 함수들:
- CodexTest.htmlTest()
- CodexTest.cssTest() 
- CodexTest.jsTest()
- CodexTest.apiTest()
`, 
'color: #667eea; font-size: 20px; font-weight: bold;',
'color: #2d3436; font-size: 14px;',
'color: #636e72; font-size: 12px;'
);
