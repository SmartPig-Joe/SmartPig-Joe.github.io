// 深度学习研讨班页面的语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    // 语言切换按钮
    const languageBtn = document.getElementById('language-btn');
    const htmlElement = document.documentElement;
    
    // 定义英文和中文的内容映射
    const translations = {
        en: {
            // 页面标题
            'pageTitle': 'Deep Learning Seminar Details',
            'seminarTitle': 'Deep Learning Seminar',
            // 导航按钮
            'languageBtn': '中文',
            'languageBtnTitle': 'Switch to Chinese',
            'backBtn': 'Back to Home',
            // 通用翻译项
            'session': 'Session',
            'speakers': 'Speakers:',
            // 每个研讨会的标题
            'session1Topic': 'Introduction to Deep Learning',
            'session2Topic': 'Language Modeling and Inverse Problems',
            'session3Topic': 'Computer Vision Fundamentals',
            'session4Topic': 'Transformers and Beyond',
            'session5Topic': 'Neural Network Initialization',
            'session6Topic': 'Understanding Diffusion Models',
            // 时间和地点
            'session1Date': 'October 13, 2024',
            'session1Time': '9:30 AM - 11:30 AM',
            'session1Location': 'Xi\'an Jiaotong University',
            
            'session2Date': 'October 20, 2024',
            'session2Time': '9:30 AM - 11:30 AM',
            'session2Location': 'Xi\'an Jiaotong University, Building C-206',
            
            'session3Date': 'October 27, 2024',
            'session3Time': '9:30 AM - 11:30 AM',
            'session3Location': 'Xi\'an Jiaotong University, Building A-204',
            
            'session4Date': 'November 17, 2024',
            'session4Time': '9:30 AM - 11:30 AM',
            'session4Location': 'Xi\'an Jiaotong University, Building B-102',
            
            'session5Date': 'November 24, 2024',
            'session5Time': '10:00 AM - 12:00 PM',
            'session5Location': 'Online',
            
            'session6Date': 'December 1, 2024',
            'session6Time': '9:30 AM - 11:30 AM',
            'session6Location': 'Online',
            
            // 演讲主题
            'session1Topic1': 'Introduction to Deep Learning — From Zero to Multilayer Neural Networks',
            'session1Topic2': 'Common Optimization Algorithms',
            'session1Topic3': 'Research Work and Achievements',
            
            'session2Topic1': 'How We Model Language: From Word Embeddings to RNN to LSTM',
            'session2Topic1Desc': 'How can we model language? From word vectors to RNN to LSTM. What is the fitting ability of RNN? What are its limitations? What motivated the creation of LSTM and GRU? PyTorch implementation of RNN, GRU, and LSTM. What else can be improved?',
            'session2Topic2': 'Implicit Neural Representation Methods and Applications',
            'session2Topic2Desc': 'Introduction to Implicit Neural Representation (INR) methods and applications, basic concepts of Physics-informed neural networks, and low-rank tensor function decomposition. Finally, we will explore the application of INR in inverse problems.',
            
            'session3Topic1': 'Introduction to Computer Vision',
            'session3Topic1Desc': 'Introduction to the basics of Convolutional Neural Networks (CNN) for beginners, including CNN\'s hierarchical structure, basic concepts, C++ and Python implementation of convolution operations, and analysis of classic models LeNet and AlexNet. If time permits, we will also discuss how to design lightweight CNN architectures. The seminar will be conducted in an intuitive and easy-to-understand manner, avoiding complex theories, with more focus on animations and examples to facilitate understanding, suitable for beginners interested in CNN and developers who want to quickly learn the basics of CNN.',
            'session3Topic2': 'What Makes Deep Learning Truly "Deep" — Introduction and Understanding of ResNet',
            'session3Topic2Desc': 'We will start from experimental phenomena to explore the problems that occur when networks deepen, and naturally introduce a new network structure - residual connections. Then we will provide several different perspectives to understand why "residual connections" can succeed, why it is said that it has made today\'s deep learning flourish, including forward information flow, backward information flow, dynamical systems, and other perspectives.',
            
            'session4Topic1': 'Transformer Models and Their Applications',
            'session4Topic1Desc': 'We will deeply analyze the Transformer model, from the basic Attention mechanism to its application in the CV field - Vision Transformer (ViT). Discuss how to accelerate computation through Linear Attention, and analyze the role of Softmax. Finally, we will introduce the emerging Mamba model, how it performs on related tasks, is it Mambaout or leading a new trend?',
            
            'session5Topic1': 'The Impact of Neural Network Initialization — Phase Diagram Analysis, Parameter Condensation, and Loss Landscape Embedding',
            'session5Topic1Desc': 'How does the size of neural network weight initialization affect the behavior of neural networks? In this session, we will share the research results of Professor Zhiqin Xu\'s team in this area. "Phase diagram analysis" shows the dynamic characteristics of neural networks under different conditions during training; "Condensation phenomenon" discusses the aggregation effect of neuron weights during the training process, which helps improve generalization capabilities; "Loss landscape embedding principle" explains how wide networks can contain critical points of narrow networks, guiding the model to converge to solutions of low complexity. These contents together deepen the understanding of neural network training and generalization mechanisms.',
            
            'session6Topic1': 'Understanding Diffusion Models',
            'session6Topic1Desc': 'This sharing will deeply explore and derive the mathematical principles of diffusion models from multiple perspectives, focusing on analyzing how DDPM (Denoising Diffusion Probabilistic Models), Score-Matching, Stochastic Differential Equations (SDE), Ordinary Differential Equations (ODE), and other methods help us understand the intrinsic mechanisms of the diffusion process. At the end of the sharing, we will explore physical equations related to diffusion models, especially the Fokker-Planck equation and Langevin equation, analyzing how they describe the diffusion process and its relationship with thermodynamic systems in physics. Through these equations, we will further deepen our understanding of the theoretical foundation of the diffusion process. We will also discuss the latest research directions of diffusion models, as well as questions about diffusion.',
            
            // 页脚
            'footerText': '© 2025 Deep Learning Seminar. Last Updated: April 6, 2025'
        },
        zh: {
            // 页面标题
            'pageTitle': '深度学习研讨班详情',
            'seminarTitle': '深度学习研讨班',
            // 导航按钮
            'languageBtn': 'English',
            'languageBtnTitle': '切换到英文',
            'backBtn': '返回首页',
            // 通用翻译项
            'session': '第',
            'speakers': '主讲人：',
            // 每个研讨会的标题
            'session1Topic': '深度学习入门简介',
            'session2Topic': '语言建模与反问题',
            'session3Topic': '计算机视觉基础',
            'session4Topic': 'Transformer及其发展',
            'session5Topic': '神经网络初始化的影响',
            'session6Topic': '理解扩散模型',
            // 时间和地点
            'session1Date': '2024年10月13日',
            'session1Time': '上午9:30 - 11:30',
            'session1Location': '西安交通大学',
            
            'session2Date': '2024年10月20日',
            'session2Time': '上午9:30 - 11:30',
            'session2Location': '西安交通大学 主C-206',
            
            'session3Date': '2024年10月27日',
            'session3Time': '上午9:30 - 11:30',
            'session3Location': '西安交通大学 主A-204',
            
            'session4Date': '2024年11月17日',
            'session4Time': '上午9:30 - 11:30',
            'session4Location': '西安交通大学 主B-102',
            
            'session5Date': '2024年11月24日',
            'session5Time': '上午10:00 - 12:00',
            'session5Location': '线上',
            
            'session6Date': '2024年12月1日',
            'session6Time': '上午9:30 - 11:30',
            'session6Location': '线上',
            
            // 演讲主题
            'session1Topic1': '深度学习入门简介——从零到多层神经网络',
            'session1Topic2': '几种常见的优化算法',
            'session1Topic3': '部分科研工作以及成果',
            
            'session2Topic1': '我们如何为语言建模：从词向量到RNN到LSTM',
            'session2Topic1Desc': '我们如何为语言建模：从词向量到RNN到LSTM。RNN的拟合能力如何？局限性在哪里？提出LSTM和GRU的动机是什么？RNN、GRU、LSTM的pytorch实现。还有什么可以改进的？',
            'session2Topic2': 'INR（隐式神经表示）方法与应用',
            'session2Topic2Desc': '介绍INR（implicit Neural Representation）方法与应用，并介绍Physics inform neural networks的基本思想和低秩张量函数分解的思想，最后我们将探究INR在反问题中的应用。',
            
            'session3Topic1': '计算机视觉入门',
            'session3Topic1Desc': '将为无基础新手介绍卷积神经网络（CNN）的基础知识，包括CNN的层级结构、基本概念、卷积操作的C++和Python实现，以及经典模型LeNet和AlexNet的分析。如果时间允许，还会探讨如何设计轻量化CNN架构。研讨班将以直观易懂的方式进行，避免复杂理论，更多通过动图和实例来帮助理解，适合对CNN感兴趣的初学者和希望快速了解CNN基础知识的开发者。',
            'session3Topic2': '什么让深度学习真正地变"深"——ResNet的介绍与理解',
            'session3Topic2Desc': '我们将会从实验现象出发，去探究网络加深时会出现的问题，并自然地引出一种新的网络结构——残差连接。然后我们会提供几个不同的视角来理解"残差连接"为什么能成功，为什么说它成就了今天深度学习繁荣昌盛，包括正向信息流，反向信息流，动力系统等角度。',
            
            'session4Topic1': 'Transformer模型及其应用',
            'session4Topic1Desc': '我们将深入解析Transformer模型，从基础的Attention机制到其在CV领域的应用——Vision Transformer（ViT）。探讨如何通过Linear Attention加速计算，并分析Softmax的作用。最后，我们将引出新兴的Mamba模型，其在相关任务上的表现究竟如何，是Mambaout还是引领新的潮流?',
            
            'session5Topic1': '神经网络的初始化影响——相图分析、参数凝聚与损失景观的嵌入',
            'session5Topic1Desc': '神经网络的权重初始化大小到底如何影响神经网络的行为？这期我们就分享一下许志钦教授团队在这个方面的研究成果。"相图分析"展示了神经网络训练中不同条件下的动力学特性；"凝聚现象"讨论了训练过程中神经元权重的聚集效应，有助于提高泛化能力；"损失景观的嵌入原则"解释了宽网络如何包含窄网络的临界点，指导模型向低复杂度解收敛。这些内容共同加深了对神经网络训练和泛化机制的认识。',
            
            'session6Topic1': '理解扩散模型',
            'session6Topic1Desc': '本次分享将从多个角度深入探讨并推导扩散模型的数学原理，重点分析DDPM（Denoising Diffusion Probabilistic Models）、分数匹配（Score-Matching）、随机微分方程（SDE）、常微分方程（ODE）等方法如何帮助我们理解扩散过程的内在机制。分享的最后，我们将探讨与扩散模型相关的物理方程，特别是Fokker-Planck方程和Langevin方程，分析它们如何描述扩散过程及其与物理学中热力学系统的关系。通过这些方程，我们将进一步加深对扩散过程理论基础的理解。我们还将讨论扩散模型的最新研究方向，以及关于diffusion的疑惑。',
            
            // 页脚
            'footerText': '© 2025 深度学习研讨班. 最后更新：2025年4月6日'
        }
    };

    // 更新页面内容函数
    function updatePageContent(lang) {
        document.title = translations[lang]['pageTitle'];
        
        // 更新按钮文本
        languageBtn.textContent = translations[lang]['languageBtn'];
        languageBtn.title = translations[lang]['languageBtnTitle'];
        
        // 更新页面标题
        document.querySelector('.page-title').textContent = translations[lang]['seminarTitle'];
        
        // 更新返回按钮
        document.querySelectorAll('.back-text').forEach(elem => {
            elem.textContent = translations[lang]['backBtn'];
        });
        
        // 更新每个研讨会的内容
        for (let i = 1; i <= 6; i++) {
            // 会话标题
            const sessionTitle = document.querySelector(`#session${i} .session-title`);
            if (lang === 'zh') {
                sessionTitle.innerHTML = `${translations[lang]['session']}${i}期: <span class="session-topic">${translations[lang][`session${i}Topic`]}</span>`;
            } else {
                sessionTitle.innerHTML = `Session ${i}: <span class="session-topic">${translations[lang][`session${i}Topic`]}</span>`;
            }
            
            // 日期、时间和地点
            const dateText = document.querySelector(`#session${i} .date-text`);
            const timeText = document.querySelector(`#session${i} .time-text`);
            const locationText = document.querySelector(`#session${i} .location-text`);
            
            if (dateText) dateText.textContent = translations[lang][`session${i}Date`];
            if (timeText) timeText.textContent = translations[lang][`session${i}Time`];
            if (locationText) locationText.textContent = translations[lang][`session${i}Location`];
            
            // 演讲者标题
            const speakersTitle = document.querySelector(`#session${i} .speakers-title`);
            if (speakersTitle) speakersTitle.textContent = translations[lang]['speakers'];
            
            // 主题和描述
            for (let j = 1; j <= 3; j++) {
                const topicTitle = document.querySelector(`#session${i} .topic${j}-title`);
                const topicDesc = document.querySelector(`#session${i} .topic${j}-desc`);
                
                if (topicTitle && translations[lang][`session${i}Topic${j}`]) {
                    topicTitle.textContent = translations[lang][`session${i}Topic${j}`];
                }
                
                if (topicDesc && translations[lang][`session${i}Topic${j}Desc`]) {
                    topicDesc.textContent = translations[lang][`session${i}Topic${j}Desc`];
                }
            }
        }
        
        // 更新页脚
        document.querySelector('.footer-text').textContent = translations[lang]['footerText'];
    }
    
    // 检查语言切换按钮
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            const currentLang = htmlElement.lang === 'en' ? 'en' : 'zh';
            const newLang = currentLang === 'en' ? 'zh' : 'en';
            
            // 切换 HTML lang 属性
            htmlElement.lang = newLang;
            
            // 更新页面内容
            updatePageContent(newLang);
        });
    }
});