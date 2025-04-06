// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 语言切换功能
    const languageBtn = document.getElementById('language-btn');
    const htmlElement = document.documentElement;
    
    // 定义英文和中文的内容映射
    const translations = {
        en: {
            // 导航菜单
            'About Me': 'About Me',
            'Research': 'Research',
            'Publications': 'Publications',
            'Projects': 'Projects',
            'Seminar': 'Seminar',
            'Contact': 'Contact',
            // 按钮文本
            'languageBtn': '中文',
            'languageBtnTitle': 'Switch to Chinese',
            // 页面标题
            'pageTitle': 'Jiaxuan Zou - Academic Personal Website',
            // 个人信息
            'title': 'Undergraduate Student | School of Mathematics and Statistics',
            'institution': 'Xi\'an Jiaotong University',
            // About Me 部分
            'aboutMeTitle': 'About Me',
            'bioP1': 'I am an undergraduate student at the School of Mathematics and Statistics, Xi\'an Jiaotong University. My research interests focus on several areas of artificial intelligence and its applications.',
            'bioP2': 'I am particularly interested in deep learning theory, large language model mechanisms, AI for science, and time series modeling using deep learning approaches.',
            'educationTitle': 'Education',
            'degreeTitle': 'Bachelor\'s Degree',
            'schoolName': 'Xi\'an Jiaotong University',
            'yearRange': '2024-Present',
            'department': 'School of Mathematics and Statistics',
            // 研究方向部分
            'researchTitle': 'Research Interests',
            'dlTheory': 'Deep Learning Theory',
            'dlTheoryDesc': 'My research in this area focuses on the training dynamics of neural networks and representation theory. I\'m interested in understanding the theoretical underpinnings of deep learning models and how they learn and represent information.',
            'llmTitle': 'Large Language Model Mechanisms',
            'llmDesc': 'I study the inner workings of large language models, including attention mechanisms, emergent abilities, scaling laws, and interpretability. My research aims to better understand how these models process and generate language.',
            'aiForScience': 'AI for Science',
            'aiForScienceDesc': 'My work in this area includes applications such as seismic horizon picking using deep learning and protein structure prediction. I\'m interested in how AI can accelerate scientific discovery and solve complex problems in various domains.',
            'timeSeriesTitle': 'Time Series Modeling',
            'timeSeriesDesc': 'I research deep learning methods for time series data modeling, exploring how neural networks can effectively capture temporal patterns and dependencies in sequential data.',
            // 出版物部分
            'publicationsTitle': 'Publications',
            'noPublications': 'Currently no publications available. Check back for updates on my research work.',
            // 项目部分
            'projectsTitle': 'Research Projects',
            'nnDesignTitle': 'Neural Network Design for Time Series Modeling',
            'nnDesignDate': '2024-Present',
            'nnDesignDesc': 'Designing a specialized neural network for time series modeling by leveraging the frequency principles of neural networks.',
            'seismicTitle': 'Deep Learning for Seismic Horizon Picking',
            'seismicDate': '2024-Present',
            'seismicDesc': 'Researching deep learning methods for Seismic Horizon Picking. Results will be published in IEEE Transactions on Geoscience and Remote Sensing.',
            'proteinTitle': 'Protein Structure Prediction Using Deep Learning',
            'proteinDate': '2024-Present',
            'proteinDesc': 'Developing deep learning approaches for protein structure prediction to advance our understanding of protein folding and function.',
            // 研讨班部分
            'seminarTitle': 'Deep Learning Seminar',
            'seminarCourseTitle': 'Introduction to Deep Learning',
            'seminarDate': '2025 Spring Semester',
            'seminarDesc': 'This seminar covers fundamental concepts and advanced topics in deep learning. Topics include neural network architectures, optimization techniques, and applications in computer vision and natural language processing. All recordings are available online for students to follow along and learn at their own pace.',
            'watchRecordings': 'Watch Seminar Recordings',
            'viewDetails': 'View Course Details',
            // 联系方式部分
            'contactTitle': 'Contact Information',
            'address': 'School of Mathematics and Statistics, Xi\'an Jiaotong University, Xi\'an, Shaanxi, China',
            // 页脚
            'footerText': '© 2025 Jiaxuan Zou. Last Updated: April 6, 2025'
        },
        zh: {
            // 导航菜单
            'About Me': '关于我',
            'Research': '研究方向',
            'Publications': '发表论文',
            'Projects': '研究项目',
            'Seminar': '研讨班',
            'Contact': '联系方式',
            // 按钮文本
            'languageBtn': 'English',
            'languageBtnTitle': '切换到英文',
            // 页面标题
            'pageTitle': '邹嘉轩 - 学术个人网站',
            // 个人信息
            'title': '本科生 | 数学与统计学院',
            'institution': '西安交通大学',
            // About Me 部分
            'aboutMeTitle': '关于我',
            'bioP1': '我目前是西安交通大学数学与统计学院的一名本科生。我的研究兴趣集中在人工智能及其应用的多个领域。',
            'bioP2': '我特别对深度学习理论、LLM机理、AI for science以及基于深度学习的时间序列建模感兴趣。',
            'educationTitle': '教育背景',
            'degreeTitle': '学士学位',
            'schoolName': '西安交通大学',
            'yearRange': '2024-至今',
            'department': '数学与统计学院',
            // 研究方向部分
            'researchTitle': '研究方向',
            'dlTheory': '深度学习理论',
            'dlTheoryDesc': '我在这一领域的研究主要集中在神经网络的训练动力学和表示理论上。我研究神经网络的理论基础以及它们如何学习和表示信息。',
            'llmTitle': 'LLM机理',
            'llmDesc': '我研究LLM的内部工作原理，包括注意力机制、涌现能力、扩展定律和可解释性。我的研究旨在更好地理解这些模型如何处理和生成语言。',
            'aiForScience': 'AI for Science',
            'aiForScienceDesc': '我在这一领域的工作包括使用深度学习进行地震层位拾取和蛋白质结构预测等应用。我对AI如何加速科学发现并解决各领域的复杂问题感兴趣。',
            'timeSeriesTitle': '时间序列建模',
            'timeSeriesDesc': '我研究用于时间序列数据建模的深度学习方法，探索神经网络如何有效捕获时间模式和序列数据中的依赖关系。',
            // 出版物部分
            'publicationsTitle': '发表论文',
            'noPublications': '目前尚无发表论文。请稍后查看我的研究工作更新。',
            // 项目部分
            'projectsTitle': '研究项目',
            'nnDesignTitle': '时间序列建模的神经网络设计',
            'nnDesignDate': '2024-至今',
            'nnDesignDesc': '利用神经网络的低频偏好设计专门用于时间序列建模的神经网络。',
            'seismicTitle': '用于地震层位拾取的深度学习模型',
            'seismicDate': '2024-至今',
            'seismicDesc': '研究用于地震层位拾取的深度学习方法。研究结果将发表在《IEEE Transactions on Geoscience and Remote Sensing》上。',
            'proteinTitle': '使用深度学习的蛋白质结构预测',
            'proteinDate': '2024-至今',
            'proteinDesc': '开发用于蛋白质结构预测的深度学习方法，以促进我们对蛋白质折叠和功能的理解。',
            // 研讨班部分
            'seminarTitle': '深度学习研讨班',
            'seminarCourseTitle': '深度学习导论',
            'seminarDate': '2025年春季学期',
            'seminarDesc': '本研讨班涵盖深度学习的基础概念和高级主题。主题包括神经网络架构、优化技术以及在计算机视觉和自然语言处理中的应用。所有录播都在线提供，供学生跟随学习。',
            'watchRecordings': '观看课程录播',
            'viewDetails': '查看课程详情',
            // 联系方式部分
            'contactTitle': '联系方式',
            'address': '中国陕西省西安市·西安交通大学数学与统计学院',
            // 页脚
            'footerText': '© 2025 邹嘉轩 最后更新：2025年4月6日'
        }
    };
    
    // 检查语言切换按钮
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            const currentLang = htmlElement.lang === 'en' ? 'en' : 'zh';
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            
            // 切换 HTML lang 属性
            htmlElement.lang = newLang;
            
            // 更新网页标题
            document.title = translations[newLang]['pageTitle'];
            
            // 更新按钮文本
            languageBtn.textContent = translations[newLang]['languageBtn'];
            languageBtn.title = translations[newLang]['languageBtnTitle'];
            
            // 更新导航菜单
            const navLinks = document.querySelectorAll('nav ul li a');
            navLinks.forEach(link => {
                const key = link.textContent.trim();
                // 查找相应的英文/中文键值对
                if (currentLang === 'en') {
                    // 从英文切换到中文
                    for (const [enKey, zhValue] of Object.entries(translations.en)) {
                        if (key === zhValue && translations.zh[enKey]) {
                            link.textContent = translations.zh[enKey];
                            break;
                        }
                    }
                } else {
                    // 从中文切换到英文
                    for (const [zhKey, enValue] of Object.entries(translations.zh)) {
                        if (key === enValue && translations.en[zhKey]) {
                            link.textContent = translations.en[zhKey];
                            break;
                        }
                    }
                }
            });
            
            // 更新个人信息
            const titleElem = document.querySelector('.profile-info .title');
            const institutionElem = document.querySelector('.profile-info .institution');
            
            if (titleElem) titleElem.textContent = translations[newLang]['title'];
            if (institutionElem) institutionElem.textContent = translations[newLang]['institution'];
            
            // 更新各部分标题
            const aboutTitle = document.querySelector('#about h2');
            const researchTitle = document.querySelector('#research h2');
            const publicationsTitle = document.querySelector('#publications h2');
            const projectsTitle = document.querySelector('#projects h2');
            const seminarTitle = document.querySelector('#seminar h2');
            const contactTitle = document.querySelector('#contact h2');
            
            if (aboutTitle) aboutTitle.textContent = translations[newLang]['aboutMeTitle'];
            if (researchTitle) researchTitle.textContent = translations[newLang]['researchTitle'];
            if (publicationsTitle) publicationsTitle.textContent = translations[newLang]['publicationsTitle'];
            if (projectsTitle) projectsTitle.textContent = translations[newLang]['projectsTitle'];
            if (seminarTitle) seminarTitle.textContent = translations[newLang]['seminarTitle'];
            if (contactTitle) contactTitle.textContent = translations[newLang]['contactTitle'];
            
            // 更新自我介绍部分
            const bioParagraphs = document.querySelectorAll('.bio p');
            if (bioParagraphs.length >= 1) bioParagraphs[0].textContent = translations[newLang]['bioP1'];
            if (bioParagraphs.length >= 2) bioParagraphs[1].textContent = translations[newLang]['bioP2'];
            
            // 更新教育部分
            const educationTitle = document.querySelector('.education h3');
            const degreeElem = document.querySelector('.degree');
            const institutionSpan = document.querySelector('.education .institution');
            const yearElem = document.querySelector('.year');
            const departmentElem = document.querySelector('.education li p');
            
            if (educationTitle) educationTitle.textContent = translations[newLang]['educationTitle'];
            if (degreeElem) degreeElem.textContent = translations[newLang]['degreeTitle'];
            if (institutionSpan) institutionSpan.textContent = translations[newLang]['schoolName'];
            if (yearElem) yearElem.textContent = translations[newLang]['yearRange'];
            if (departmentElem) departmentElem.textContent = translations[newLang]['department'];
            
            // 更新研究方向部分
            const researchItems = document.querySelectorAll('.research-item');
            
            if (researchItems.length >= 1) {
                const dlTheoryTitle = researchItems[0].querySelector('h3');
                const dlTheoryDesc = researchItems[0].querySelector('p');
                if (dlTheoryTitle) dlTheoryTitle.textContent = translations[newLang]['dlTheory'];
                if (dlTheoryDesc) dlTheoryDesc.textContent = translations[newLang]['dlTheoryDesc'];
            }
            
            if (researchItems.length >= 2) {
                const llmTitle = researchItems[1].querySelector('h3');
                const llmDesc = researchItems[1].querySelector('p');
                if (llmTitle) llmTitle.textContent = translations[newLang]['llmTitle'];
                if (llmDesc) llmDesc.textContent = translations[newLang]['llmDesc'];
            }
            
            if (researchItems.length >= 3) {
                const aiTitle = researchItems[2].querySelector('h3');
                const aiDesc = researchItems[2].querySelector('p');
                if (aiTitle) aiTitle.textContent = translations[newLang]['aiForScience'];
                if (aiDesc) aiDesc.textContent = translations[newLang]['aiForScienceDesc'];
            }
            
            if (researchItems.length >= 4) {
                const tsTitle = researchItems[3].querySelector('h3');
                const tsDesc = researchItems[3].querySelector('p');
                if (tsTitle) tsTitle.textContent = translations[newLang]['timeSeriesTitle'];
                if (tsDesc) tsDesc.textContent = translations[newLang]['timeSeriesDesc'];
            }
            
            // 更新出版物部分
            const noPublications = document.querySelector('.no-publications');
            if (noPublications) noPublications.textContent = translations[newLang]['noPublications'];
            
            // 更新项目部分
            const projectItems = document.querySelectorAll('.project-item');
            
            if (projectItems.length >= 1) {
                const nnTitle = projectItems[0].querySelector('h3');
                const nnDate = projectItems[0].querySelector('.project-date');
                const nnDesc = projectItems[0].querySelector('.project-description');
                
                if (nnTitle) nnTitle.textContent = translations[newLang]['nnDesignTitle'];
                if (nnDate) nnDate.textContent = translations[newLang]['nnDesignDate'];
                if (nnDesc) nnDesc.textContent = translations[newLang]['nnDesignDesc'];
            }
            
            if (projectItems.length >= 2) {
                const seismicTitle = projectItems[1].querySelector('h3');
                const seismicDate = projectItems[1].querySelector('.project-date');
                const seismicDesc = projectItems[1].querySelector('.project-description');
                
                if (seismicTitle) seismicTitle.textContent = translations[newLang]['seismicTitle'];
                if (seismicDate) seismicDate.textContent = translations[newLang]['seismicDate'];
                if (seismicDesc) seismicDesc.textContent = translations[newLang]['seismicDesc'];
            }
            
            if (projectItems.length >= 3) {
                const proteinTitle = projectItems[2].querySelector('h3');
                const proteinDate = projectItems[2].querySelector('.project-date');
                const proteinDesc = projectItems[2].querySelector('.project-description');
                
                if (proteinTitle) proteinTitle.textContent = translations[newLang]['proteinTitle'];
                if (proteinDate) proteinDate.textContent = translations[newLang]['proteinDate'];
                if (proteinDesc) proteinDesc.textContent = translations[newLang]['proteinDesc'];
            }
            
            // 更新研讨班部分
            const seminarItem = document.querySelector('.seminar-item');
            if (seminarItem) {
                const seminarTitleElem = seminarItem.querySelector('.seminar-title');
                const seminarDateElem = seminarItem.querySelector('.seminar-date');
                const seminarDescElem = seminarItem.querySelector('.seminar-description');
                const seminarLinks = seminarItem.querySelectorAll('.seminar-link');
                
                if (seminarTitleElem) seminarTitleElem.textContent = translations[newLang]['seminarCourseTitle'];
                if (seminarDateElem) seminarDateElem.textContent = translations[newLang]['seminarDate'];
                if (seminarDescElem) seminarDescElem.textContent = translations[newLang]['seminarDesc'];
                
                // Update both seminar links (watch recordings and view details)
                if (seminarLinks.length > 0) {
                    // First link - Watch Recordings
                    const firstLink = seminarLinks[0];
                    const firstIcon = firstLink.querySelector('i');
                    firstLink.textContent = '';
                    if (firstIcon) firstLink.appendChild(firstIcon);
                    firstLink.appendChild(document.createTextNode(' ' + translations[newLang]['watchRecordings']));
                    
                    // Second link - View Course Details
                    if (seminarLinks.length > 1) {
                        const secondLink = seminarLinks[1];
                        const secondIcon = secondLink.querySelector('i');
                        secondLink.textContent = '';
                        if (secondIcon) secondLink.appendChild(secondIcon);
                        secondLink.appendChild(document.createTextNode(' ' + translations[newLang]['viewDetails']));
                    }
                }
            }
            
            // 更新联系方式部分
            const addressElem = document.querySelector('.contact-item:nth-child(3) p');
            if (addressElem) addressElem.textContent = translations[newLang]['address'];
            
            // 更新页脚
            const footerText = document.querySelector('footer p');
            if (footerText) footerText.textContent = translations[newLang]['footerText'];
        });
    }
    
    // 论文筛选功能
    const filterButtons = document.querySelectorAll('.filter-btn');
    const publicationItems = document.querySelectorAll('.publication-item');
    
    // 为每个筛选按钮添加点击事件
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // 移除所有按钮的active类
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 为当前点击的按钮添加active类
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // 显示或隐藏论文条目
            publicationItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 减去一些偏移以考虑固定标题
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 页面滚动时添加导航栏效果（如果需要）
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // 可选：添加简单的图片预加载或懒加载功能
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        const src = img.getAttribute('src');
        if (src && !src.startsWith('data:')) {
            const preloadImage = new Image();
            preloadImage.src = src;
        }
    });
    
    // 可选：为联系方式添加复制到剪贴板功能
    const emailElement = document.querySelector('.contact-item:first-child p');
    if (emailElement) {
        emailElement.addEventListener('click', function() {
            const email = this.textContent;
            navigator.clipboard.writeText(email).then(() => {
                // 可以添加一个临时提示，表明已复制
                const originalText = this.textContent;
                this.textContent = '已复制到剪贴板！';
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
        emailElement.style.cursor = 'pointer';
        emailElement.title = '点击复制邮箱地址';
    }
});