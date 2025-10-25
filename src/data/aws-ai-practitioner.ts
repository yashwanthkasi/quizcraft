import { Quiz } from '@/types/quiz';

export const awsAiPractitionerQuiz: Quiz = {
  "metadata": {
    "title": "AWS AI Practitioner Certification Questions",
    "version": "1.0",
    "totalQuestions": 136,
    "description": "Comprehensive question bank for AWS AI Certification preparation"
  },
  "questions": [
    {
      "id": 1,
      "question": "A company makes forecasts each quarter to decide how to optimize operations to meet expected demand. The company uses ML models to make these forecasts. An AI practitioner is writing a report about the trained ML models to provide transparency and explainability to company stakeholders. What should the AI practitioner include in the report to meet the transparency and explainability requirements?",
      "options": [
        "Code for model training",
        "Partial dependence plots (PDPs)",
        "Sample data for training",
        "Model convergence tables"
      ],
      "correctAnswer": [
        "Partial dependence plots (PDPs)"
      ],
      "category": "Model Explainability & Transparency",
      "explanation": "Partial dependence plots (PDPs) show the marginal effect of features on predicted outcomes, making them ideal for explaining model behavior to non-technical stakeholders. They provide visual insights into how different variables affect predictions without requiring deep technical knowledge."
    },
    {
      "id": 2,
      "question": "A law firm wants to build an AI application by using large language models (LLMs). The application will read legal documents and extract key points from the documents. Which solution meets these requirements?",
      "options": [
        "Build an automatic named entity recognition system",
        "Create a recommendation engine",
        "Develop a summarization chatbot",
        "Develop a multi-language translation system"
      ],
      "correctAnswer": [
        "Develop a summarization chatbot"
      ],
      "category": "Generative AI Applications",
      "explanation": "A summarization chatbot using LLMs is the ideal solution for extracting key points from legal documents. LLMs excel at understanding context and generating concise summaries of lengthy text, which is exactly what's needed for legal document analysis."
    },
    {
      "id": 3,
      "question": "A company wants to classify human genes into 20 categories based on gene characteristics. The company needs an ML algorithm to document how the inner mechanism of the model affects the output. Which ML algorithm meets these requirements?",
      "options": [
        "Decision trees",
        "Linear regression",
        "Logistic regression",
        "Neural networks"
      ],
      "correctAnswer": [
        "Decision trees"
      ],
      "category": "ML Algorithms & Model Selection",
      "explanation": "Decision trees are highly interpretable and provide clear documentation of how decisions are made through their tree structure. Each split in the tree shows which features are important and how they contribute to the final classification, making them ideal when explainability is required."
    },
    {
      "id": 4,
      "question": "A company has built an image classification model to predict plant diseases from photos of plant leaves. The company wants to evaluate how many images the model classified correctly. Which evaluation metric should the company use to measure the model's performance?",
      "options": [
        "R-squared score",
        "Accuracy",
        "Root mean squared error (RMSE)",
        "Learning rate"
      ],
      "correctAnswer": [
        "Accuracy"
      ],
      "category": "Model Evaluation Metrics",
      "explanation": "Accuracy is the most straightforward metric for classification problems, measuring the percentage of correctly classified images out of total images. It directly answers the question of how many images were classified correctly."
    },
    {
      "id": 5,
      "question": "A company is using a pre-trained large language model (LLM) to build a chatbot for product recommendations. The company needs the LLM outputs to be short and written in a specific language. Which solution will align the LLM response quality with the company's expectations?",
      "options": [
        "Adjust the prompt",
        "Choose an LLM of a different size",
        "Increase the temperature",
        "Increase the Top K value"
      ],
      "correctAnswer": [
        "Adjust the prompt"
      ],
      "category": "Prompt Engineering",
      "explanation": "Adjusting the prompt is the most direct and effective way to control output format and language. You can specify in the prompt that responses should be concise and in a particular language, giving you immediate control over the output characteristics without changing the model itself."
    },
    {
      "id": 6,
      "question": "A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency. Which SageMaker inference option meets these requirements?",
      "options": [
        "Real-time inference",
        "Serverless inference",
        "Asynchronous inference",
        "Batch transform"
      ],
      "correctAnswer": [
        "Asynchronous inference"
      ],
      "category": "AWS SageMaker Deployment",
      "explanation": "Asynchronous inference is designed for large payloads (up to 1 GB) and longer processing times (up to 1 hour), while still providing near real-time responses. It queues requests and processes them asynchronously, which is perfect for this use case."
    },
    {
      "id": 7,
      "question": "A company is using domain-specific models. The company wants to avoid creating new models from the beginning. The company instead wants to adapt pre-trained models to create models for new, related tasks. Which ML strategy meets these requirements?",
      "options": [
        "Increase the number of epochs",
        "Use transfer learning",
        "Decrease the number of epochs",
        "Use unsupervised learning"
      ],
      "correctAnswer": [
        "Use transfer learning"
      ],
      "category": "ML Training Strategies",
      "explanation": "Transfer learning is specifically designed for adapting pre-trained models to new, related tasks. It allows you to leverage the knowledge learned from one task and apply it to another, avoiding the need to train from scratch and significantly reducing training time and data requirements."
    },
    {
      "id": 8,
      "question": "A company is building a solution to generate images for protective eyewear. The solution must have high accuracy and must minimize the risk of incorrect annotations. Which solution will meet these requirements?",
      "options": [
        "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus",
        "Data augmentation by using an Amazon Bedrock knowledge base",
        "Image recognition by using Amazon Rekognition",
        "Data summarization by using Amazon QuickSight Q"
      ],
      "correctAnswer": [
        "Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus"
      ],
      "category": "Data Labeling & Quality",
      "explanation": "Human-in-the-loop validation with SageMaker Ground Truth Plus ensures high accuracy by having human reviewers verify and correct annotations. This approach minimizes errors in training data, which is critical for applications requiring high accuracy like protective eyewear design."
    },
    {
      "id": 9,
      "question": "A company wants to create a chatbot by using a foundation model (FM) on Amazon Bedrock. The FM needs to access encrypted data that is stored in an Amazon S3 bucket. The data is encrypted with Amazon S3 managed keys (SSE-S3). The FM encounters a failure when attempting to access the S3 bucket data. Which solution will meet these requirements?",
      "options": [
        "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key",
        "Set the access permissions for the S3 buckets to allow public access to enable access over the internet",
        "Use prompt engineering techniques to tell the model to look for information in Amazon S3",
        "Ensure that the S3 data does not contain sensitive information"
      ],
      "correctAnswer": [
        "Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key"
      ],
      "category": "AWS Security & Permissions",
      "explanation": "The Amazon Bedrock service role must have proper IAM permissions to decrypt data encrypted with SSE-S3. This is a security and access control issue that requires proper IAM policy configuration to allow Bedrock to access and decrypt the S3 objects."
    },
    {
      "id": 10,
      "question": "A company wants to use language models to create an application for inference on edge devices. The inference must have the lowest latency possible. Which solution will meet these requirements?",
      "options": [
        "Deploy optimized small language models (SLMs) on edge devices",
        "Deploy optimized large language models (LLMs) on edge devices",
        "Incorporate a centralized small language model (SLM) API for asynchronous communication with edge devices",
        "Incorporate a centralized large language model (LLM) API for asynchronous communication with edge devices"
      ],
      "correctAnswer": [
        "Deploy optimized small language models (SLMs) on edge devices"
      ],
      "category": "Edge Computing & Model Deployment",
      "explanation": "Deploying optimized small language models directly on edge devices provides the lowest latency because there's no network communication delay. SLMs are designed to run efficiently on resource-constrained devices while still providing good performance."
    },
    {
      "id": 11,
      "question": "A company wants to build an ML model by using Amazon SageMaker. The company needs to share and manage variables for model development across multiple teams. Which SageMaker feature meets these requirements?",
      "options": [
        "Amazon SageMaker Feature Store",
        "Amazon SageMaker Data Wrangler",
        "Amazon SageMaker Clarify",
        "Amazon SageMaker Model Cards"
      ],
      "correctAnswer": [
        "Amazon SageMaker Feature Store"
      ],
      "category": "AWS SageMaker Features",
      "explanation": "Amazon SageMaker Feature Store is specifically designed for sharing and managing ML features (variables) across teams. It provides a centralized repository for feature storage, discovery, and sharing, enabling consistent feature usage across different models and teams."
    },
    {
      "id": 12,
      "question": "A company wants to use generative AI to increase developer productivity and software development. The company wants to use Amazon Q Developer. What can Amazon Q Developer do to help the company meet these requirements?",
      "options": [
        "Create software snippets, reference tracking, and open source license tracking",
        "Run an application without provisioning or managing servers",
        "Enable voice commands for coding and providing natural language search",
        "Convert audio files to text documents by using ML models"
      ],
      "correctAnswer": [
        "Create software snippets, reference tracking, and open source license tracking"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Q Developer is specifically designed to assist developers by generating code snippets, tracking references, and managing open source licenses. These features directly enhance developer productivity by automating routine coding tasks and ensuring license compliance."
    },
    {
      "id": 13,
      "question": "A financial institution is using Amazon Bedrock to develop an AI application. The application is hosted in a VPC. To meet regulatory compliance standards, the VPC is not allowed access to any internet traffic. Which AWS service or feature will meet these requirements?",
      "options": [
        "AWS PrivateLink",
        "Amazon Macie",
        "Amazon CloudFront",
        "Internet gateway"
      ],
      "correctAnswer": [
        "AWS PrivateLink"
      ],
      "category": "AWS Networking & Security",
      "explanation": "AWS PrivateLink allows you to access AWS services like Amazon Bedrock privately from your VPC without using an internet gateway, NAT device, VPN, or AWS Direct Connect. This meets regulatory requirements by keeping all traffic within the AWS network."
    },
    {
      "id": 14,
      "question": "A company wants to develop an educational game where users answer questions such as the following: 'A jar contains six red, four green, and three yellow marbles. What is the probability of choosing a green marble from the jar?' Which solution meets these requirements with the LEAST operational overhead?",
      "options": [
        "Use supervised learning to create a regression model that will predict probability",
        "Use reinforcement learning to train a model to return the probability",
        "Use code that will calculate probability by using simple rules and computations",
        "Use unsupervised learning to create a model that will estimate probability density"
      ],
      "correctAnswer": [
        "Use code that will calculate probability by using simple rules and computations"
      ],
      "category": "Problem-Solving Approach",
      "explanation": "For simple mathematical probability calculations, using straightforward code with basic rules and computations is the most efficient solution. ML models would be overkill for this deterministic problem and would require unnecessary training data, infrastructure, and maintenance."
    },
    {
      "id": 15,
      "question": "Which metric measures the runtime efficiency of operating AI models?",
      "options": [
        "Customer satisfaction score (SAT)",
        "Training time for each epoch",
        "Average response time",
        "Number of training instances"
      ],
      "correctAnswer": [
        "Average response time"
      ],
      "category": "Model Performance Metrics",
      "explanation": "Average response time directly measures how efficiently a model operates during inference by tracking how long it takes to generate predictions. This is a key runtime efficiency metric that impacts user experience and system performance."
    },
    {
      "id": 16,
      "question": "A company is building a contact center application and wants to gain insights from customer conversations. The company wants to analyze and extract key information from the audio of the customer calls. Which solution meets these requirements?",
      "options": [
        "Build a conversational chatbot by using Amazon Lex",
        "Transcribe call recordings by using Amazon Transcribe",
        "Extract information from call recordings by using Amazon SageMaker Model Monitor",
        "Create classification labels by using Amazon Comprehend"
      ],
      "correctAnswer": [
        "Transcribe call recordings by using Amazon Transcribe"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Transcribe is designed specifically for converting speech to text from audio recordings. Once transcribed, the text can be analyzed to extract insights. This is the first and essential step for analyzing audio customer calls."
    },
    {
      "id": 17,
      "question": "A company has petabytes of unlabeled customer data to use for an advertisement campaign. The company wants to classify its customers into tiers to advertise and promote the company's products. Which methodology should the company use to meet these requirements?",
      "options": [
        "Supervised learning",
        "Unsupervised learning",
        "Reinforcement learning",
        "Reinforcement learning from human feedback (RLHF)"
      ],
      "correctAnswer": [
        "Unsupervised learning"
      ],
      "category": "ML Methodologies",
      "explanation": "Unsupervised learning is ideal for unlabeled data when you want to discover natural groupings or patterns. Clustering algorithms can automatically segment customers into tiers based on their characteristics without requiring pre-labeled training data."
    },
    {
      "id": 18,
      "question": "An AI practitioner wants to use a foundation model (FM) to design a search application. The search application must handle queries that have text and images. Which type of FM should the AI practitioner use to power the search application?",
      "options": [
        "Multi-modal embedding model",
        "Text embedding model",
        "Multi-modal generation model",
        "Image generation model"
      ],
      "correctAnswer": [
        "Multi-modal embedding model"
      ],
      "category": "Foundation Models",
      "explanation": "Multi-modal embedding models can process both text and images, creating embeddings in a shared vector space. This enables semantic search across different modalities, making them perfect for search applications that need to handle both text and image queries."
    },
    {
      "id": 19,
      "question": "A company uses a foundation model (FM) from Amazon Bedrock for an AI search tool. The company wants to fine-tune the model to be more accurate by using the company's data. Which strategy will successfully fine-tune the model?",
      "options": [
        "Provide labeled data with the prompt field and the completion field",
        "Prepare the training dataset by creating a txt file that contains multiple lines in .csv format",
        "Purchase Provisioned Throughput for Amazon Bedrock",
        "Train the model on journals and textbooks"
      ],
      "correctAnswer": [
        "Provide labeled data with the prompt field and the completion field"
      ],
      "category": "Model Fine-tuning",
      "explanation": "Fine-tuning foundation models in Amazon Bedrock requires providing labeled training data with prompt-completion pairs. This format allows the model to learn the desired input-output relationships specific to your use case."
    },
    {
      "id": 20,
      "question": "A company wants to use AI to protect its application from threats. The AI solution needs to check if an IP address is from a suspicious source. Which solution meets these requirements?",
      "options": [
        "Build a speech recognition system",
        "Create a natural language processing (NLP) named entity recognition system",
        "Develop an anomaly detection system",
        "Create a fraud forecasting system"
      ],
      "correctAnswer": [
        "Develop an anomaly detection system"
      ],
      "category": "AI Security Applications",
      "explanation": "An anomaly detection system can identify unusual patterns in IP address behavior, flagging suspicious sources based on deviations from normal traffic patterns. This is ideal for threat detection and security applications."
    },
    {
      "id": 21,
      "question": "Which feature of Amazon OpenSearch Service gives companies the ability to build vector database applications?",
      "options": [
        "Integration with Amazon S3 for object storage",
        "Support for geospatial indexing and queries",
        "Scalable index management and nearest neighbor search capability",
        "Ability to perform real-time analysis on streaming data"
      ],
      "correctAnswer": [
        "Scalable index management and nearest neighbor search capability"
      ],
      "category": "AWS Services & Features",
      "explanation": "The k-nearest neighbor (k-NN) search capability in Amazon OpenSearch Service enables vector database functionality. This allows storing and searching high-dimensional vectors, which is essential for similarity search in AI applications like semantic search and recommendation systems."
    },
    {
      "id": 22,
      "question": "Which option is a use case for generative AI models?",
      "options": [
        "Improving network security by using intrusion detection systems",
        "Creating photorealistic images from text descriptions for digital marketing",
        "Enhancing database performance by using optimized indexing",
        "Analyzing financial data to forecast stock market trends"
      ],
      "correctAnswer": [
        "Creating photorealistic images from text descriptions for digital marketing"
      ],
      "category": "Generative AI Use Cases",
      "explanation": "Generative AI models excel at creating new content, such as generating photorealistic images from text descriptions. This is a core capability of models like Stable Diffusion and DALL-E, making it a primary use case for generative AI in digital marketing."
    },
    {
      "id": 23,
      "question": "A company wants to build a generative AI application by using Amazon Bedrock and needs to choose a foundation model (FM). The company wants to know how much information can fit into one prompt. Which consideration will inform the company's decision?",
      "options": [
        "Temperature",
        "Context window",
        "Batch size",
        "Model size"
      ],
      "correctAnswer": [
        "Context window"
      ],
      "category": "Foundation Model Parameters",
      "explanation": "The context window (also called context length) determines the maximum amount of text (in tokens) that can be included in a single prompt and response. This directly answers how much information can fit into one prompt."
    },
    {
      "id": 24,
      "question": "A company wants to make a chatbot to help customers. The chatbot will help solve technical problems without human intervention. The company chose a foundation model (FM) for the chatbot. The chatbot needs to produce responses that adhere to company tone. Which solution meets these requirements?",
      "options": [
        "Set a low limit on the number of tokens the FM can produce",
        "Use batch inferencing to process detailed responses",
        "Experiment and refine the prompt until the FM produces the desired responses",
        "Define a higher number for the temperature parameter"
      ],
      "correctAnswer": [
        "Experiment and refine the prompt until the FM produces the desired responses"
      ],
      "category": "Prompt Engineering",
      "explanation": "Prompt engineering through experimentation and refinement is the most effective way to control the tone and style of FM responses. By iteratively adjusting the prompt, you can guide the model to produce responses that match your company's communication standards."
    },
    {
      "id": 25,
      "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify the sentiment of text passages as positive or negative. Which prompt engineering strategy meets these requirements?",
      "options": [
        "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified",
        "Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt",
        "Provide the new text passage to be classified without any additional context or examples",
        "Provide the new text passage with a few examples of unrelated tasks, such as text summarization or question answering"
      ],
      "correctAnswer": [
        "Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified"
      ],
      "category": "Prompt Engineering",
      "explanation": "This describes few-shot prompting, where you provide examples of the task with correct labels to help the model understand what's expected. This is highly effective for classification tasks like sentiment analysis, as it teaches the model the pattern through examples."
    },
    {
      "id": 26,
      "question": "A security company is using Amazon Bedrock to run foundation models (FMs). The company wants to ensure that only authorized users invoke the models. The company needs to identify any unauthorized access attempts to set appropriate AWS Identity and Access Management (IAM) policies and roles for future iterations of the FMs. Which AWS service should the company use to identify unauthorized users that are trying to access Amazon Bedrock?",
      "options": [
        "AWS Audit Manager",
        "AWS CloudTrail",
        "Amazon Fraud Detector",
        "AWS Trusted Advisor"
      ],
      "correctAnswer": [
        "AWS CloudTrail"
      ],
      "category": "AWS Security & Monitoring",
      "explanation": "AWS CloudTrail logs all API calls made to AWS services, including Amazon Bedrock. It records who made the call, when it was made, and whether it succeeded or failed, making it perfect for identifying unauthorized access attempts and auditing user activity."
    },
    {
      "id": 27,
      "question": "A company has developed an ML model for image classification. The company wants to deploy the model to production so that a web application can use the model. The company needs to implement a solution to host the model and serve predictions without managing any of the underlying infrastructure. Which solution will meet these requirements?",
      "options": [
        "Use Amazon SageMaker Serverless Inference to deploy the model",
        "Use Amazon CloudFront to deploy the model",
        "Use Amazon API Gateway to host the model and serve predictions",
        "Use AWS Batch to host the model and serve predictions"
      ],
      "correctAnswer": [
        "Use Amazon SageMaker Serverless Inference to deploy the model"
      ],
      "category": "AWS SageMaker Deployment",
      "explanation": "Amazon SageMaker Serverless Inference automatically provisions, scales, and manages the infrastructure for serving predictions. It's ideal when you want to deploy ML models without managing servers, and it only charges for the compute time used during inference."
    },
    {
      "id": 28,
      "question": "An AI company periodically evaluates its systems and processes with the help of independent software vendors (ISVs). The company needs to receive email message notifications when an ISV's compliance reports become available. Which AWS service can the company use to meet this requirement?",
      "options": [
        "AWS Audit Manager",
        "AWS Artifact",
        "AWS Trusted Advisor",
        "AWS Data Exchange"
      ],
      "correctAnswer": [
        "AWS Artifact"
      ],
      "category": "AWS Compliance Services",
      "explanation": "AWS Artifact provides on-demand access to AWS compliance reports and can send notifications when new reports are available. It's the central resource for compliance-related information and can notify users about new ISV compliance reports."
    },
    {
      "id": 29,
      "question": "A company wants to use a large language model (LLM) to develop a conversational agent. The company needs to prevent the LLM from being manipulated with common prompt engineering techniques to perform undesirable actions or expose sensitive information. Which action will reduce these risks?",
      "options": [
        "Create a prompt template that teaches the LLM to detect attack patterns",
        "Increase the temperature parameter on invocation requests to the LLM",
        "Avoid using LLMs that are not listed in Amazon SageMaker",
        "Decrease the number of input tokens on invocations of the LLM"
      ],
      "correctAnswer": [
        "Create a prompt template that teaches the LLM to detect attack patterns"
      ],
      "category": "LLM Security",
      "explanation": "Creating a prompt template that includes instructions for detecting and rejecting malicious prompts (prompt injection attacks) is an effective defense mechanism. This approach teaches the LLM to recognize and refuse to execute potentially harmful instructions embedded in user inputs."
    },
    {
      "id": 30,
      "question": "A company is using the Generative AI Security Scoping Matrix to assess security responsibilities for its solutions. The company has identified four different solution scopes based on the matrix. Which solution scope gives the company the MOST ownership of security responsibilities?",
      "options": [
        "Using a third-party enterprise application that has embedded generative AI features",
        "Building an application by using an existing third-party generative AI foundation model (FM)",
        "Refining an existing third-party generative AI foundation model (FM) by fine-tuning the model by using data specific to the business",
        "Building and training a generative AI model from scratch by using specific data that a customer owns"
      ],
      "correctAnswer": [
        "Building and training a generative AI model from scratch by using specific data that a customer owns"
      ],
      "category": "AI Security & Governance",
      "explanation": "Building and training a model from scratch gives the company complete ownership and responsibility for all aspects of the model, including data security, model security, training infrastructure, and ongoing maintenance. This represents the highest level of security responsibility."
    },
    {
      "id": 31,
      "question": "An AI practitioner has a database of animal photos. The AI practitioner wants to automatically identify and categorize the animals in the photos without manual human effort. Which strategy meets these requirements?",
      "options": [
        "Object detection",
        "Anomaly detection",
        "Named entity recognition",
        "Inpainting"
      ],
      "correctAnswer": [
        "Object detection"
      ],
      "category": "Computer Vision",
      "explanation": "Object detection is the computer vision technique that identifies and classifies objects (in this case, animals) within images. It can detect multiple animals in a single image and categorize them automatically, which is exactly what's needed for this use case."
    },
    {
      "id": 32,
      "question": "A company wants to create an application by using Amazon Bedrock. The company has a limited budget and prefers flexibility without long-term commitment. Which Amazon Bedrock pricing model meets these requirements?",
      "options": [
        "On-Demand",
        "Model customization",
        "Provisioned Throughput",
        "Spot Instance"
      ],
      "correctAnswer": [
        "On-Demand"
      ],
      "category": "AWS Pricing Models",
      "explanation": "On-Demand pricing for Amazon Bedrock allows you to pay only for what you use without any long-term commitments. This provides maximum flexibility and is ideal for companies with limited budgets or variable workloads that don't need guaranteed throughput."
    },
    {
      "id": 33,
      "question": "Which AWS service or feature can help an AI development team quickly deploy and consume a foundation model (FM) within the team's VPC?",
      "options": [
        "Amazon Personalize",
        "Amazon SageMaker JumpStart",
        "PartyRock, an Amazon Bedrock Playground",
        "Amazon SageMaker endpoints"
      ],
      "correctAnswer": [
        "Amazon SageMaker JumpStart"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon SageMaker JumpStart provides pre-trained foundation models that can be quickly deployed within your VPC. It offers a model hub with one-click deployment capabilities, making it easy for teams to start using FMs without building from scratch."
    },
    {
      "id": 34,
      "question": "How can companies use large language models (LLMs) securely on Amazon Bedrock?",
      "options": [
        "Design clear and specific prompts. Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access",
        "Enable AWS Audit Manager for automatic model evaluation jobs",
        "Enable Amazon Bedrock automatic model evaluation jobs",
        "Use Amazon CloudWatch Logs to make models explainable and to monitor for bias"
      ],
      "correctAnswer": [
        "Design clear and specific prompts. Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access"
      ],
      "category": "LLM Security Best Practices",
      "explanation": "Securing LLMs on Amazon Bedrock requires both good prompt design (to prevent prompt injection and get desired outputs) and proper IAM configuration following least privilege principles. This combination ensures both functional security and access control security."
    },
    {
      "id": 35,
      "question": "A company has terabytes of data in a database that the company can use for business analysis. The company wants to build an AI-based application that can build a SQL query from input text that employees provide. The employees have minimal experience with technology. Which solution meets these requirements?",
      "options": [
        "Generative pre-trained transformers (GPT)",
        "Residual neural network",
        "Support vector machine",
        "WaveNet"
      ],
      "correctAnswer": [
        "Generative pre-trained transformers (GPT)"
      ],
      "category": "AI Model Selection",
      "explanation": "Generative pre-trained transformers (GPT) are large language models that excel at understanding natural language and generating structured outputs like SQL queries. They can translate plain English questions into SQL, making databases accessible to non-technical users."
    },
    {
      "id": 36,
      "question": "A company built a deep learning model for object detection and deployed the model to production. Which AI process occurs when the model analyzes a new image to identify objects?",
      "options": [
        "Training",
        "Inference",
        "Model deployment",
        "Bias correction"
      ],
      "correctAnswer": [
        "Inference"
      ],
      "category": "ML Lifecycle",
      "explanation": "Inference is the process of using a trained model to make predictions on new, unseen data. When the deployed model analyzes a new image to identify objects, it's performing inference - applying what it learned during training to produce predictions."
    },
    {
      "id": 37,
      "question": "An AI practitioner is building a model to generate images of humans in various professions. The AI practitioner discovered that the input data is biased and that specific attributes affect the image generation and create bias in the model. Which technique will solve the problem?",
      "options": [
        "Data augmentation for imbalanced classes",
        "Model monitoring for class distribution",
        "Retrieval Augmented Generation (RAG)",
        "Watermark detection for images"
      ],
      "correctAnswer": [
        "Data augmentation for imbalanced classes"
      ],
      "category": "Bias Mitigation",
      "explanation": "Data augmentation for imbalanced classes helps address bias by creating additional synthetic training examples for underrepresented groups. This balances the training dataset and reduces bias in the model's outputs, ensuring fairer representation across different demographics and professions."
    },
    {
      "id": 38,
      "question": "A company is implementing the Amazon Titan foundation model (FM) by using Amazon Bedrock. The company needs to supplement the model by using relevant data from the company's private data sources. Which solution will meet this requirement?",
      "options": [
        "Use a different FM",
        "Choose a lower temperature value",
        "Create an Amazon Bedrock knowledge base",
        "Enable model invocation logging"
      ],
      "correctAnswer": [
        "Create an Amazon Bedrock knowledge base"
      ],
      "category": "Amazon Bedrock Features",
      "explanation": "Amazon Bedrock knowledge bases allow you to connect your private data sources to foundation models, implementing Retrieval Augmented Generation (RAG). This enables the model to access and use your company's specific information when generating responses."
    },
    {
      "id": 39,
      "question": "A medical company is customizing a foundation model (FM) for diagnostic purposes. The company needs the model to be transparent and explainable to meet regulatory requirements. Which solution will meet these requirements?",
      "options": [
        "Configure the security and compliance by using Amazon Inspector",
        "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify",
        "Encrypt and secure training data by using Amazon Macie",
        "Gather more data. Use Amazon Rekognition to add custom labels to the data"
      ],
      "correctAnswer": [
        "Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify"
      ],
      "category": "Model Explainability",
      "explanation": "Amazon SageMaker Clarify is specifically designed for model explainability and transparency. It generates metrics, reports, and visualizations that explain how models make predictions, which is essential for meeting regulatory requirements in healthcare and other regulated industries."
    },
    {
      "id": 40,
      "question": "A company wants to deploy a conversational chatbot based on a fine-tuned Amazon SageMaker JumpStart model. The application must comply with multiple regulatory frameworks. Which capabilities can the company show compliance for? (Choose two.)",
      "options": [
        "Auto scaling inference endpoints",
        "Threat detection",
        "Data protection",
        "Cost optimization",
        "Loosely coupled microservices"
      ],
      "correctAnswer": [
        "Threat detection",
        "Data protection"
      ],
      "category": "AWS Compliance & Security",
      "explanation": "For regulatory compliance, the most relevant capabilities are threat detection (identifying security risks) and data protection (ensuring data privacy and security through encryption and access controls). These directly address regulatory requirements for security and privacy."
    },
    {
      "id": 41,
      "question": "A company is training a foundation model (FM). The company wants to increase the accuracy of the model up to a specific acceptance level. Which solution will meet these requirements?",
      "options": [
        "Decrease the batch size",
        "Increase the epochs",
        "Decrease the epochs",
        "Increase the temperature parameter"
      ],
      "correctAnswer": [
        "Increase the epochs"
      ],
      "category": "Model Training",
      "explanation": "Increasing the number of epochs (training iterations over the entire dataset) allows the model to learn more from the training data, generally improving accuracy. However, this should be balanced with monitoring for overfitting."
    },
    {
      "id": 42,
      "question": "A company is building a large language model (LLM) question answering chatbot. The company wants to decrease the number of actions call center employees need to take to respond to customer questions. Which business objective should the company use to evaluate the effect of the LLM chatbot?",
      "options": [
        "Website engagement rate",
        "Average call duration",
        "Corporate social responsibility",
        "Regulatory compliance"
      ],
      "correctAnswer": [
        "Average call duration"
      ],
      "category": "Business Metrics",
      "explanation": "Average call duration directly measures efficiency in customer service. If the LLM chatbot successfully helps employees respond more quickly by providing better answers, the average call duration should decrease, demonstrating the chatbot's effectiveness."
    },
    {
      "id": 43,
      "question": "Which functionality does Amazon SageMaker Clarify provide?",
      "options": [
        "Integrates a Retrieval Augmented Generation (RAG) workflow",
        "Monitors the quality of ML models in production",
        "Documents critical details about ML models",
        "Identifies potential bias during data preparation"
      ],
      "correctAnswer": [
        "Identifies potential bias during data preparation"
      ],
      "category": "AWS SageMaker Features",
      "explanation": "Amazon SageMaker Clarify is specifically designed to detect bias in ML models and datasets. It can identify potential bias during data preparation, training, and inference, and provides reports on fairness metrics and feature importance."
    },
    {
      "id": 44,
      "question": "A company is developing a new model to predict the prices of specific items. The model performed well on the training dataset. When the company deployed the model to production, the model's performance decreased significantly. What should the company do to mitigate this problem?",
      "options": [
        "Reduce the volume of data that is used in training",
        "Add hyperparameters to the model",
        "Increase the volume of data that is used in training",
        "Increase the model training time"
      ],
      "correctAnswer": [
        "Increase the volume of data that is used in training"
      ],
      "category": "Model Performance Issues",
      "explanation": "This scenario describes overfitting, where the model memorizes the training data but doesn't generalize well to new data. Increasing the volume and diversity of training data helps the model learn more general patterns and improves performance on unseen production data."
    },
    {
      "id": 45,
      "question": "An ecommerce company wants to build a solution to determine customer sentiments based on written customer reviews of products. Which AWS services meet these requirements? (Choose two.)",
      "options": [
        "Amazon Lex",
        "Amazon Comprehend",
        "Amazon Polly",
        "Amazon Bedrock",
        "Amazon Rekognition"
      ],
      "correctAnswer": [
        "Amazon Comprehend",
        "Amazon Bedrock"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Comprehend is specifically designed for natural language processing tasks including sentiment analysis. Amazon Bedrock with appropriate foundation models can also perform sentiment analysis on text. Both services can analyze customer reviews and determine sentiment."
    },
    {
      "id": 46,
      "question": "A company wants to use large language models (LLMs) with Amazon Bedrock to develop a chat interface for the company's product manuals. The manuals are stored as PDF files. Which solution meets these requirements MOST cost-effectively?",
      "options": [
        "Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock",
        "Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock",
        "Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts",
        "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock"
      ],
      "correctAnswer": [
        "Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock"
      ],
      "category": "RAG Implementation",
      "explanation": "Using an Amazon Bedrock knowledge base with RAG is the most cost-effective solution. It allows the LLM to retrieve only relevant information from the manuals for each query, avoiding the high token costs of including entire PDFs in prompts or the expense of fine-tuning."
    },
    {
      "id": 47,
      "question": "A social media company wants to use a large language model (LLM) for content moderation. The company wants to evaluate the LLM outputs for bias and potential discrimination against specific groups or individuals. Which data source should the company use to evaluate the LLM outputs with the LEAST administrative effort?",
      "options": [
        "User-generated content",
        "Moderation logs",
        "Content moderation guidelines",
        "Benchmark datasets"
      ],
      "correctAnswer": [
        "Benchmark datasets"
      ],
      "category": "Model Evaluation",
      "explanation": "Benchmark datasets are pre-existing, standardized datasets specifically designed for evaluating models for bias and fairness. They require the least administrative effort because they're already prepared, labeled, and validated, eliminating the need to create custom evaluation datasets."
    },
    {
      "id": 48,
      "question": "A company wants to use a pre-trained generative AI model to generate content for its marketing campaigns. The company needs to ensure that the generated content aligns with the company's brand voice and messaging requirements. Which solution meets these requirements?",
      "options": [
        "Optimize the model's architecture and hyperparameters to improve the model's overall performance",
        "Increase the model's complexity by adding more layers to the model's architecture",
        "Create effective prompts that provide clear instructions and context to guide the model's generation",
        "Select a large, diverse dataset to pre-train a new generative model"
      ],
      "correctAnswer": [
        "Create effective prompts that provide clear instructions and context to guide the model's generation"
      ],
      "category": "Prompt Engineering",
      "explanation": "Creating effective prompts with clear instructions about brand voice, tone, and messaging requirements is the most practical way to align a pre-trained model's outputs with company standards. This approach requires no model retraining and provides immediate control over outputs."
    },
    {
      "id": 49,
      "question": "A loan company is building a generative AI-based solution to offer new applicants discounts based on specific business criteria. The company wants to build and use an AI model responsibly to minimize bias that could negatively affect some customers. Which actions should the company take to meet these requirements? (Choose two.)",
      "options": [
        "Detect imbalances or disparities in the data",
        "Ensure that the model runs frequently",
        "Evaluate the model's behavior so that the company can provide transparency to stakeholders",
        "Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model is 100% accurate",
        "Ensure that the model's inference time is within the accepted limits"
      ],
      "correctAnswer": [
        "Detect imbalances or disparities in the data",
        "Evaluate the model's behavior so that the company can provide transparency to stakeholders"
      ],
      "category": "Responsible AI",
      "explanation": "To minimize bias, the company should detect data imbalances (which can lead to biased predictions) and evaluate model behavior for transparency. These practices ensure fairness and allow stakeholders to understand and trust the decision-making process."
    },
    {
      "id": 50,
      "question": "A company is using an Amazon Bedrock base model to summarize documents for an internal use case. The company trained a custom model to improve the summarization quality. Which action must the company take to use the custom model through Amazon Bedrock?",
      "options": [
        "Purchase Provisioned Throughput for the custom model",
        "Deploy the custom model in an Amazon SageMaker endpoint for real-time inference",
        "Register the model with the Amazon SageMaker Model Registry",
        "Grant access to the custom model in Amazon Bedrock"
      ],
      "correctAnswer": [
        "Purchase Provisioned Throughput for the custom model"
      ],
      "category": "Amazon Bedrock Custom Models",
      "explanation": "To use a custom model in Amazon Bedrock, you must purchase Provisioned Throughput. This reserves model capacity and makes the custom model available for inference through Amazon Bedrock APIs."
    },
    {
      "id": 51,
      "question": "A company needs to choose a model from Amazon Bedrock to use internally. The company must identify a model that generates responses in a style that the company's employees prefer. What should the company do to meet these requirements?",
      "options": [
        "Evaluate the models by using built-in prompt datasets",
        "Evaluate the models by using a human workforce and custom prompt datasets",
        "Use public model leaderboards to identify the model",
        "Use the model InvocationLatency runtime metrics in Amazon CloudWatch when trying models"
      ],
      "correctAnswer": [
        "Evaluate the models by using a human workforce and custom prompt datasets"
      ],
      "category": "Model Selection",
      "explanation": "To determine which model best matches employee preferences for response style, the company needs human evaluation with custom prompts relevant to their use case. This provides subjective quality assessment that technical metrics cannot capture."
    },
    {
      "id": 52,
      "question": "A student at a university is copying content from generative AI to write essays. Which challenge of responsible generative AI does this scenario represent?",
      "options": [
        "Toxicity",
        "Hallucinations",
        "Plagiarism",
        "Hallucinations"
      ],
      "correctAnswer": [
        "Plagiarism"
      ],
      "category": "Responsible AI Challenges",
      "explanation": "Copying content from generative AI without attribution represents plagiarism. This is an ethical concern with generative AI, as it can enable academic dishonesty and misrepresentation of original work."
    },
    {
      "id": 53,
      "question": "A company needs to build its own large language model (LLM) based on only the company's private data. The company is concerned about the environmental effect of the training process. Which Amazon EC2 instance type has the LEAST environmental effect when training LLMs?",
      "options": [
        "Amazon EC2 C series",
        "Amazon EC2 G series",
        "Amazon EC2 P series",
        "Amazon EC2 Trn series"
      ],
      "correctAnswer": [
        "Amazon EC2 Trn series"
      ],
      "category": "Sustainable AI",
      "explanation": "Amazon EC2 Trn (Trainium) instances are purpose-built by AWS for deep learning training with high performance per watt. They're designed to be more energy-efficient than general-purpose GPU instances, resulting in lower environmental impact."
    },
    {
      "id": 54,
      "question": "A company wants to build an interactive application for children that generates new stories based on classic stories. The company wants to use Amazon Bedrock and needs to ensure that the results and topics are appropriate for children. Which AWS service or feature will meet these requirements?",
      "options": [
        "Amazon Rekognition",
        "Amazon Bedrock playgrounds",
        "Guardrails for Amazon Bedrock",
        "Agents for Amazon Bedrock"
      ],
      "correctAnswer": [
        "Guardrails for Amazon Bedrock"
      ],
      "category": "Content Safety",
      "explanation": "Guardrails for Amazon Bedrock allows you to implement safeguards that filter content based on policies you define. This ensures generated content is appropriate for children by blocking harmful, inappropriate, or sensitive topics."
    },
    {
      "id": 56,
      "question": "A digital devices company wants to predict customer demand for memory hardware. The company does not have coding experience or knowledge of ML algorithms and needs to develop a data-driven predictive model. The company needs to perform analysis on internal data and external data. Which solution will meet these requirements?",
      "options": [
        "Store the data in Amazon S3. Create ML models and demand forecast predictions by using Amazon SageMaker built-in algorithms that use the data from Amazon S3",
        "Import the data into Amazon SageMaker Data Wrangler. Create ML models and demand forecast predictions by using SageMaker built-in algorithms",
        "Import the data into Amazon SageMaker Data Wrangler. Build ML models and demand forecast predictions by using an Amazon Personalize Trending-Now recipe",
        "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas"
      ],
      "correctAnswer": [
        "Import the data into Amazon SageMaker Canvas. Build ML models and demand forecast predictions by selecting the values in the data from SageMaker Canvas"
      ],
      "category": "No-Code ML Solutions",
      "explanation": "Amazon SageMaker Canvas is a no-code ML service designed for business analysts without coding experience. It provides a visual interface for building ML models, including forecasting models, making it perfect for this use case."
    },
    {
      "id": 57,
      "question": "A company has installed a security camera. The company uses an ML model to evaluate the security camera footage for potential thefts. The company has discovered that the model disproportionately flags people who are members of a specific ethnic group. Which type of bias is affecting the model output?",
      "options": [
        "Measurement bias",
        "Sampling bias",
        "Observer bias",
        "Confirmation bias"
      ],
      "correctAnswer": [
        "Sampling bias"
      ],
      "category": "Bias Types",
      "explanation": "Sampling bias occurs when the training data doesn't represent the population the model will be used on. If certain ethnic groups were overrepresented in 'theft' examples or underrepresented in 'normal' examples during training, the model learned biased patterns leading to discriminatory outcomes."
    },
    {
      "id": 58,
      "question": "A company is building a customer service chatbot. The company wants the chatbot to improve its responses by learning from past interactions and online resources. Which AI learning strategy provides this self-improvement capability?",
      "options": [
        "Supervised learning with a manually curated dataset of good responses and bad responses",
        "Reinforcement learning with rewards for positive customer feedback",
        "Unsupervised learning to find clusters of similar customer inquiries",
        "Supervised learning with a continuously updated FAQ database"
      ],
      "correctAnswer": [
        "Reinforcement learning with rewards for positive customer feedback"
      ],
      "category": "ML Learning Strategies",
      "explanation": "Reinforcement learning allows the chatbot to learn from feedback by receiving rewards for positive customer interactions. This enables continuous self-improvement as the chatbot learns which responses lead to better outcomes based on real user feedback."
    },
    {
      "id": 59,
      "question": "An AI practitioner has built a deep learning model to classify the types of materials in images. The AI practitioner now wants to measure the model performance. Which metric will help the AI practitioner evaluate the performance of the model?",
      "options": [
        "Confusion matrix",
        "Correlation matrix",
        "R2 score",
        "Mean squared error (MSE)"
      ],
      "correctAnswer": [
        "Confusion matrix"
      ],
      "category": "Model Evaluation Metrics",
      "explanation": "A confusion matrix is the standard tool for evaluating classification models. It shows true positives, true negatives, false positives, and false negatives for each class, providing a comprehensive view of classification performance across all material types."
    },
    {
      "id": 60,
      "question": "A company has built a chatbot that can respond to natural language questions with images. The company wants to ensure that the chatbot does not return inappropriate or unwanted images. Which solution will meet these requirements?",
      "options": [
        "Implement moderation APIs",
        "Retrain the model with a general public dataset",
        "Perform model validation",
        "Automate user feedback integration"
      ],
      "correctAnswer": [
        "Implement moderation APIs"
      ],
      "category": "Content Moderation",
      "explanation": "Moderation APIs (like Amazon Rekognition's content moderation) can automatically detect and filter inappropriate content in images before they're returned to users. This provides real-time content safety without requiring model retraining."
    },
    {
      "id": 61,
      "question": "An AI practitioner is using an Amazon Bedrock base model to summarize session chats from the customer service department. The AI practitioner wants to store invocation logs to monitor model input and output data. Which strategy should the AI practitioner use?",
      "options": [
        "Configure AWS CloudTrail as the logs destination for the model",
        "Enable invocation logging in Amazon Bedrock",
        "Configure AWS Audit Manager as the logs destination for the model",
        "Configure model invocation logging in Amazon EventBridge"
      ],
      "correctAnswer": [
        "Enable invocation logging in Amazon Bedrock"
      ],
      "category": "Amazon Bedrock Monitoring",
      "explanation": "Amazon Bedrock has built-in invocation logging that captures model inputs and outputs. Enabling this feature allows you to store detailed logs of all model invocations for monitoring, debugging, and compliance purposes."
    },
    {
      "id": 62,
      "question": "A company is building an ML model to analyze archived data. The company must perform inference on large datasets that are multiple GBs in size. The company does not need to access the model predictions immediately. Which Amazon SageMaker inference option will meet these requirements?",
      "options": [
        "Batch transform",
        "Real-time inference",
        "Serverless inference",
        "Asynchronous inference"
      ],
      "correctAnswer": [
        "Batch transform"
      ],
      "category": "AWS SageMaker Inference",
      "explanation": "Batch transform is designed for processing large datasets offline without requiring immediate results. It's cost-effective for analyzing archived data in bulk and can handle datasets of multiple GBs efficiently."
    },
    {
      "id": 63,
      "question": "Which term describes the numerical representations of real-world objects and concepts that AI and natural language processing (NLP) models use to improve understanding of textual information?",
      "options": [
        "Embeddings",
        "Tokens",
        "Models",
        "Binaries"
      ],
      "correctAnswer": [
        "Embeddings"
      ],
      "category": "NLP Concepts",
      "explanation": "Embeddings are vector representations that capture semantic meaning of words, sentences, or other data. They convert text into numerical form that ML models can process, with similar concepts having similar vector representations."
    },
    {
      "id": 64,
      "question": "A research company implemented a chatbot by using a foundation model (FM) from Amazon Bedrock. The chatbot searches for answers to questions from a large database of research papers. After multiple prompt engineering attempts, the company notices that the FM is performing poorly because of the complex scientific terms in the research papers. How can the company improve the performance of the chatbot?",
      "options": [
        "Use few-shot prompting to define how the FM can answer the questions",
        "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms",
        "Change the FM inference parameters",
        "Clean the research paper data to remove complex scientific terms"
      ],
      "correctAnswer": [
        "Use domain adaptation fine-tuning to adapt the FM to complex scientific terms"
      ],
      "category": "Model Fine-tuning",
      "explanation": "Domain adaptation fine-tuning trains the foundation model on domain-specific data (scientific research papers) to help it understand specialized terminology. This is the most effective approach when a model struggles with technical domain-specific language."
    },
    {
      "id": 65,
      "question": "A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company needs the LLM to produce more consistent responses to the same input prompt. Which adjustment to an inference parameter should the company make to meet these requirements?",
      "options": [
        "Decrease the temperature value",
        "Increase the temperature value",
        "Decrease the length of output tokens",
        "Increase the maximum generation length"
      ],
      "correctAnswer": [
        "Decrease the temperature value"
      ],
      "category": "LLM Parameters",
      "explanation": "Temperature controls randomness in LLM outputs. Lower temperature values (closer to 0) make outputs more deterministic and consistent, while higher values increase randomness. For consistent sentiment analysis, decreasing temperature is the correct approach."
    },
    {
      "id": 66,
      "question": "A company wants to develop a large language model (LLM) application by using Amazon Bedrock and customer data that is uploaded to Amazon S3. The company's security policy states that each team can access data for only the team's own customers. Which solution will meet these requirements?",
      "options": [
        "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data",
        "Create a custom service role that has Amazon S3 access. Ask teams to specify the customer name on each Amazon Bedrock request",
        "Redact personal data in Amazon S3. Update the S3 bucket policy to allow team access to customer data",
        "Create one Amazon Bedrock role that has full Amazon S3 access. Create IAM roles for each team that have access to only each team's customer folders"
      ],
      "correctAnswer": [
        "Create an Amazon Bedrock custom service role for each team that has access to only the team's customer data"
      ],
      "category": "AWS Security & Access Control",
      "explanation": "Creating separate Amazon Bedrock service roles for each team with permissions scoped to only their customer data ensures proper data isolation. This follows the principle of least privilege and prevents teams from accessing other teams' customer data."
    },
    {
      "id": 67,
      "question": "A company deployed a disease detection model on Amazon Bedrock. To comply with privacy policies, the company wants to prevent the model from including personal patient information in its responses. The company also wants to receive notification when policy violations occur. Which solution meets these requirements?",
      "options": [
        "Use Amazon Macie to scan the model's output for sensitive data and set up alerts for potential violations",
        "Configure AWS CloudTrail to monitor the model's responses and create alerts for any detected personal information",
        "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations",
        "Implement Amazon SageMaker Model Monitor to detect data drift and receive alerts when model quality degrades"
      ],
      "correctAnswer": [
        "Use Guardrails for Amazon Bedrock to filter content. Set up Amazon CloudWatch alarms for notification of policy violations"
      ],
      "category": "Content Filtering & Compliance",
      "explanation": "Guardrails for Amazon Bedrock can filter sensitive content including PII from model outputs in real-time. Combined with CloudWatch alarms, it provides both prevention and notification capabilities for policy violations."
    },
    {
      "id": 68,
      "question": "A company manually reviews all submitted resumes in PDF format. As the company grows, the company expects the volume of resumes to exceed the company's review capacity. The company needs an automated system to convert the PDF resumes into plain text format for additional processing. Which AWS service meets this requirement?",
      "options": [
        "Amazon Textract",
        "Amazon Personalize",
        "Amazon Lex",
        "Amazon Transcribe"
      ],
      "correctAnswer": [
        "Amazon Textract"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Textract is designed to extract text and data from documents including PDFs. It can automatically convert PDF resumes into structured text format, making it the ideal service for this document processing use case."
    },
    {
      "id": 69,
      "question": "An education provider is building a question and answer application that uses a generative AI model to explain complex concepts. The education provider wants to automatically change the style of the model response depending on who is asking the question. The education provider will give the model the age range of the user who has asked the question. Which solution meets these requirements with the LEAST implementation effort?",
      "options": [
        "Fine-tune the model by using additional training data that is representative of the various age ranges that the application will support",
        "Add a role description to the prompt context that instructs the model of the age range that the response should target",
        "Use chain-of-thought reasoning to deduce the correct style and complexity for a response suitable for that user",
        "Summarize the response text depending on the age of the user so that younger users receive shorter responses"
      ],
      "correctAnswer": [
        "Add a role description to the prompt context that instructs the model of the age range that the response should target"
      ],
      "category": "Prompt Engineering",
      "explanation": "Adding age-appropriate instructions to the prompt context is the simplest solution requiring minimal implementation effort. The prompt can specify 'explain this for a 10-year-old' or 'explain this for a college student,' and the model will adjust its response accordingly."
    },
    {
      "id": 70,
      "question": "Which strategy evaluates the accuracy of a foundation model (FM) that is used in image classification tasks?",
      "options": [
        "Calculate the total cost of resources used by the model",
        "Measure the model's accuracy against a predefined benchmark dataset",
        "Count the number of layers in the neural network",
        "Assess the color accuracy of images processed by the model"
      ],
      "correctAnswer": [
        "Measure the model's accuracy against a predefined benchmark dataset"
      ],
      "category": "Model Evaluation",
      "explanation": "Measuring model accuracy against a benchmark dataset with known labels is the standard method for evaluating classification model performance. It provides objective metrics comparing predictions to ground truth."
    },
    {
      "id": 71,
      "question": "An accounting firm wants to implement a large language model (LLM) to automate document processing. The firm must proceed responsibly to avoid potential harms. What should the firm do when developing and deploying the LLM? (Choose two.)",
      "options": [
        "Include fairness metrics for model evaluation",
        "Adjust the temperature parameter of the model",
        "Modify the training data to mitigate bias",
        "Avoid overfitting on the training data",
        "Apply prompt engineering techniques"
      ],
      "correctAnswer": [
        "Include fairness metrics for model evaluation",
        "Modify the training data to mitigate bias"
      ],
      "category": "Responsible AI Development",
      "explanation": "To develop AI responsibly, the firm should include fairness metrics to measure and monitor bias, and modify training data to ensure it's representative and balanced. These practices directly address potential harms and promote fairness in automated document processing."
    },
    {
      "id": 72,
      "question": "A company is building an ML model. The company collected new data and analyzed the data by creating a correlation matrix, calculating statistics, and visualizing the data. Which stage of the ML pipeline is the company currently in?",
      "options": [
        "Data pre-processing",
        "Feature engineering",
        "Exploratory data analysis",
        "Hyperparameter tuning"
      ],
      "correctAnswer": [
        "Exploratory data analysis"
      ],
      "category": "ML Pipeline Stages",
      "explanation": "Exploratory Data Analysis (EDA) involves understanding data through statistical analysis, visualization, and identifying patterns and relationships (like correlation matrices). This happens before preprocessing and feature engineering."
    },
    {
      "id": 73,
      "question": "A company has documents that are missing some words because of a database error. The company wants to build an ML model that can suggest potential words to fill in the missing text. Which type of model meets this requirement?",
      "options": [
        "Topic modeling",
        "Clustering models",
        "Prescriptive ML models",
        "BERT-based models"
      ],
      "correctAnswer": [
        "BERT-based models"
      ],
      "category": "NLP Models",
      "explanation": "BERT (Bidirectional Encoder Representations from Transformers) and similar models excel at masked language modeling - predicting missing words based on surrounding context. This is exactly what's needed for filling in missing text in documents."
    },
    {
      "id": 74,
      "question": "A company wants to display the total sales for its top-selling products across various retail locations in the past 12 months. Which AWS solution should the company use to automate the generation of graphs?",
      "options": [
        "Amazon Q in Amazon EC2",
        "Amazon Q Developer",
        "Amazon Q in Amazon QuickSight",
        "Amazon Q in AWS Chatbot"
      ],
      "correctAnswer": [
        "Amazon Q in Amazon QuickSight"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Q in QuickSight is specifically designed for business intelligence and data visualization. It can automatically generate graphs and insights from sales data, making it ideal for creating visualizations of sales trends across products and locations."
    },
    {
      "id": 75,
      "question": "A company is building a chatbot to improve user experience. The company is using a large language model (LLM) from Amazon Bedrock for intent detection. The company wants to use few-shot learning to improve intent detection accuracy. Which additional data does the company need to meet these requirements?",
      "options": [
        "Pairs of chatbot responses and correct user intents",
        "Pairs of user messages and correct chatbot responses",
        "Pairs of user messages and correct user intents",
        "Pairs of user intents and correct chatbot responses"
      ],
      "correctAnswer": [
        "Pairs of user messages and correct user intents"
      ],
      "category": "Few-Shot Learning",
      "explanation": "For intent detection with few-shot learning, you need examples showing user messages (inputs) paired with their correct intents (labels). This teaches the model to recognize and classify user intentions from their messages."
    },
    {
      "id": 76,
      "question": "A company is using few-shot prompting on a base model that is hosted on Amazon Bedrock. The model currently uses 10 examples in the prompt. The model is invoked once daily and is performing well. The company wants to lower the monthly cost. Which solution will meet these requirements?",
      "options": [
        "Customize the model by using fine-tuning",
        "Decrease the number of tokens in the prompt",
        "Increase the number of tokens in the prompt",
        "Use Provisioned Throughput"
      ],
      "correctAnswer": [
        "Decrease the number of tokens in the prompt"
      ],
      "category": "Cost Optimization",
      "explanation": "Since the model is invoked infrequently (once daily) and uses on-demand pricing, reducing prompt tokens (by decreasing examples or making them more concise) directly reduces costs. Each API call is charged based on input and output tokens."
    },
    {
      "id": 77,
      "question": "An AI practitioner is using a large language model (LLM) to create content for marketing campaigns. The generated content sounds plausible and factual but is incorrect. Which problem is the LLM having?",
      "options": [
        "Data leakage",
        "Hallucination",
        "Overfitting",
        "Underfitting"
      ],
      "correctAnswer": [
        "Hallucination"
      ],
      "category": "LLM Challenges",
      "explanation": "Hallucination is when LLMs generate content that sounds confident and plausible but is factually incorrect or fabricated. This is a well-known challenge with large language models that needs to be managed through techniques like RAG or fact-checking."
    },
    {
      "id": 78,
      "question": "An AI practitioner trained a custom model on Amazon Bedrock by using a training dataset that contains confidential data. The AI practitioner wants to ensure that the custom model does not generate inference responses based on confidential data. How should the AI practitioner prevent responses based on confidential data?",
      "options": [
        "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model",
        "Mask the confidential data in the inference responses by using dynamic data masking",
        "Encrypt the confidential data in the inference responses by using Amazon SageMaker",
        "Encrypt the confidential data in the custom model by using AWS Key Management Service (AWS KMS)"
      ],
      "correctAnswer": [
        "Delete the custom model. Remove the confidential data from the training dataset. Retrain the custom model"
      ],
      "category": "Data Privacy",
      "explanation": "Once a model is trained on confidential data, that information is embedded in the model's parameters. The only way to ensure it doesn't appear in responses is to retrain the model without that confidential data. Encryption doesn't prevent the model from generating that information."
    },
    {
      "id": 79,
      "question": "A company has built a solution by using generative AI. The solution uses large language models (LLMs) to translate training manuals from English into other languages. The company wants to evaluate the accuracy of the solution by examining the text generated for the manuals. Which model evaluation strategy meets these requirements?",
      "options": [
        "Bilingual Evaluation Understudy (BLEU)",
        "Root mean squared error (RMSE)",
        "Recall-Oriented Understudy for Gisting Evaluation (ROUGE)",
        "F1 score"
      ],
      "correctAnswer": [
        "Bilingual Evaluation Understudy (BLEU)"
      ],
      "category": "NLP Evaluation Metrics",
      "explanation": "BLEU (Bilingual Evaluation Understudy) is specifically designed for evaluating machine translation quality by comparing generated translations to reference translations. It measures how closely the generated text matches human translations."
    },
    {
      "id": 80,
      "question": "A large retailer receives thousands of customer support inquiries about products every day. The customer support inquiries need to be processed and responded to quickly. The company wants to implement Agents for Amazon Bedrock. What are the key benefits of using Amazon Bedrock agents that could help this retailer?",
      "options": [
        "Generation of custom foundation models (FMs) to predict customer needs",
        "Automation of repetitive tasks and orchestration of complex workflows",
        "Automatically calling multiple foundation models (FMs) and consolidating the results",
        "Selecting the foundation model (FM) based on predefined criteria and metrics"
      ],
      "correctAnswer": [
        "Automation of repetitive tasks and orchestration of complex workflows"
      ],
      "category": "Amazon Bedrock Agents",
      "explanation": "Agents for Amazon Bedrock can automate repetitive customer support tasks and orchestrate complex workflows by breaking down inquiries, calling appropriate APIs, and coordinating multi-step processes. This is ideal for handling high volumes of customer support inquiries efficiently."
    },
    {
      "id": 81,
      "question": "Which option is a benefit of ongoing pre-training when fine-tuning a foundation model (FM)?",
      "options": [
        "Helps decrease the model's complexity",
        "Improves model performance over time",
        "Decreases the training time requirement",
        "Optimizes model inference time"
      ],
      "correctAnswer": [
        "Improves model performance over time"
      ],
      "category": "Model Training",
      "explanation": "Ongoing pre-training (also called continuous pre-training) allows the model to learn from new data and stay current, improving its performance over time as it encounters new patterns, terminology, and information."
    },
    {
      "id": 83,
      "question": "A company wants to assess the costs that are associated with using a large language model (LLM) to generate inferences. The company wants to use Amazon Bedrock to build generative AI applications. Which factor will drive the inference costs?",
      "options": [
        "Number of tokens consumed",
        "Temperature value",
        "Amount of data used to train the LLM",
        "Total training time"
      ],
      "correctAnswer": [
        "Number of tokens consumed"
      ],
      "category": "AWS Pricing",
      "explanation": "Amazon Bedrock pricing for inference is primarily based on the number of tokens consumed (both input and output tokens). The more tokens processed, the higher the cost. Temperature and training factors don't affect inference costs."
    },
    {
      "id": 84,
      "question": "A company is using Amazon SageMaker Studio notebooks to build and train ML models. The company stores the data in an Amazon S3 bucket. The company needs to manage the flow of data from Amazon S3 to SageMaker Studio notebooks. Which solution will meet this requirement?",
      "options": [
        "Use Amazon Inspector to monitor SageMaker Studio",
        "Use Amazon Macie to monitor SageMaker Studio",
        "Configure SageMaker to use a VPC with an S3 endpoint",
        "Configure SageMaker to use S3 Glacier Deep Archive"
      ],
      "correctAnswer": [
        "Configure SageMaker to use a VPC with an S3 endpoint"
      ],
      "category": "AWS Networking",
      "explanation": "Configuring SageMaker to use a VPC with an S3 VPC endpoint enables secure, private data flow between SageMaker and S3 without traversing the internet. This provides better security and control over data access."
    },
    {
      "id": 85,
      "question": "A company has a foundation model (FM) that was customized by using Amazon Bedrock to answer customer queries about products. The company wants to validate the model's responses to new types of queries. The company needs to upload a new dataset that Amazon Bedrock can use for validation. Which AWS service meets these requirements?",
      "options": [
        "Amazon S3",
        "Amazon Elastic Block Store (Amazon EBS)",
        "Amazon Elastic File System (Amazon EFS)",
        "AWS Snowcone"
      ],
      "correctAnswer": [
        "Amazon S3"
      ],
      "category": "AWS Storage Services",
      "explanation": "Amazon S3 is the standard storage service for datasets used with Amazon Bedrock. Validation datasets should be uploaded to S3, where Bedrock can access them for model evaluation and testing."
    },
    {
      "id": 86,
      "question": "Which prompting attack directly exposes the configured behavior of a large language model (LLM)?",
      "options": [
        "Prompted persona switches",
        "Exploiting friendliness and trust",
        "Ignoring the prompt template",
        "Extracting the prompt template"
      ],
      "correctAnswer": [
        "Extracting the prompt template"
      ],
      "category": "LLM Security",
      "explanation": "Extracting the prompt template (also called prompt extraction or system prompt leakage) directly exposes the system instructions and configured behavior of the LLM by tricking it into revealing its internal instructions or prompts."
    },
    {
      "id": 87,
      "question": "A company wants to use Amazon Bedrock. The company needs to review which security aspects the company is responsible for when using Amazon Bedrock. Which security aspect will the company be responsible for?",
      "options": [
        "Patching and updating the versions of Amazon Bedrock",
        "Protecting the infrastructure that hosts Amazon Bedrock",
        "Securing the company's data in transit and at rest",
        "Provisioning Amazon Bedrock within the company network"
      ],
      "correctAnswer": [
        "Securing the company's data in transit and at rest"
      ],
      "category": "Shared Responsibility Model",
      "explanation": "Under AWS's shared responsibility model, customers are responsible for securing their own data (in transit and at rest). AWS manages the service infrastructure and patching, while customers manage data security, access controls, and encryption of their content."
    },
    {
      "id": 88,
      "question": "A social media company wants to use a large language model (LLM) to summarize messages. The company has chosen a few LLMs that are available on Amazon SageMaker JumpStart. The company wants to compare the generated output toxicity of these models. Which strategy gives the company the ability to evaluate the LLMs with the LEAST operational overhead?",
      "options": [
        "Crowd-sourced evaluation",
        "Automatic model evaluation",
        "Model evaluation with human workers",
        "Reinforcement learning from human feedback (RLHF)"
      ],
      "correctAnswer": [
        "Automatic model evaluation"
      ],
      "category": "Model Evaluation",
      "explanation": "Automatic model evaluation uses pre-built metrics and tools to assess model outputs for toxicity without requiring human reviewers. This provides the least operational overhead while still measuring important safety metrics."
    },
    {
      "id": 89,
      "question": "A company is testing the security of a foundation model (FM). During testing, the company wants to get around the safety features and make harmful content. Which security technique is this an example of?",
      "options": [
        "Fuzzing training data to find vulnerabilities",
        "Denial of service (DoS)",
        "Penetration testing with authorization",
        "Jailbreak"
      ],
      "correctAnswer": [
        "Jailbreak"
      ],
      "category": "AI Security Testing",
      "explanation": "Jailbreaking refers to attempts to bypass an AI model's safety features and content filters to make it generate harmful, inappropriate, or prohibited content. This is a common security testing technique for AI systems."
    },
    {
      "id": 90,
      "question": "A company needs to use Amazon SageMaker for model training and inference. The company must comply with regulatory requirements to run SageMaker jobs in an isolated environment without internet access. Which solution will meet these requirements?",
      "options": [
        "Run SageMaker training and inference by using SageMaker Experiments",
        "Run SageMaker training and inference by using network isolation",
        "Encrypt the data at rest by using encryption for SageMaker geospatial capabilities",
        "Associate appropriate AWS Identity and Access Management (IAM) roles with the SageMaker jobs"
      ],
      "correctAnswer": [
        "Run SageMaker training and inference by using network isolation"
      ],
      "category": "AWS SageMaker Security",
      "explanation": "Network isolation in SageMaker ensures that training and inference containers cannot access the internet or make outbound network calls. This meets regulatory requirements for air-gapped or isolated computing environments."
    },
    {
      "id": 91,
      "question": "An ML research team develops custom ML models. The model artifacts are shared with other teams for integration into products and services. The ML team retains the model training code and data. The ML team wants to build a mechanism that the ML team can use to audit models. Which solution should the ML team use when publishing the custom ML models?",
      "options": [
        "Create documents with the relevant information. Store the documents in Amazon S3",
        "Use AWS AI Service Cards for transparency and understanding models",
        "Create Amazon SageMaker Model Cards with intended uses and training and inference details",
        "Create model training scripts. Commit the model training scripts to a Git repository"
      ],
      "correctAnswer": [
        "Create Amazon SageMaker Model Cards with intended uses and training and inference details"
      ],
      "category": "Model Documentation",
      "explanation": "Amazon SageMaker Model Cards are specifically designed for documenting ML models with standardized information about intended uses, training details, evaluation results, and other metadata. This provides a structured approach to model auditing and transparency."
    },
    {
      "id": 92,
      "question": "A software company builds tools for customers. The company wants to use AI to increase software development productivity. Which solution will meet these requirements?",
      "options": [
        "Use a binary classification model to generate code reviews",
        "Install code recommendation software in the company's developer tools",
        "Install a code forecasting tool to predict potential code issues",
        "Use a natural language processing (NLP) tool to generate code"
      ],
      "correctAnswer": [
        "Install code recommendation software in the company's developer tools"
      ],
      "category": "AI for Development",
      "explanation": "Code recommendation software (like Amazon CodeWhisperer or GitHub Copilot) provides AI-powered code suggestions and completions directly in developer tools, which directly increases productivity by accelerating code writing and reducing repetitive tasks."
    },
    {
      "id": 93,
      "question": "A retail store wants to predict the demand for a specific product for the next few weeks by using the Amazon SageMaker DeepAR forecasting algorithm. Which type of data will meet this requirement?",
      "options": [
        "Text data",
        "Image data",
        "Time series data",
        "Binary data"
      ],
      "correctAnswer": [
        "Time series data"
      ],
      "category": "Data Types & Algorithms",
      "explanation": "DeepAR is a forecasting algorithm designed specifically for time series data. Demand prediction requires historical data points over time (sales by day/week), making time series data the appropriate input format."
    },
    {
      "id": 94,
      "question": "A large retail bank wants to develop an ML system to help the risk management team decide on loan allocations for different demographics. What must the bank do to develop an unbiased ML model?",
      "options": [
        "Reduce the size of the training dataset",
        "Ensure that the ML model predictions are consistent with historical results",
        "Create a different ML model for each demographic group",
        "Measure class imbalance on the training dataset. Adapt the training process accordingly"
      ],
      "correctAnswer": [
        "Measure class imbalance on the training dataset. Adapt the training process accordingly"
      ],
      "category": "Bias Mitigation",
      "explanation": "Measuring and addressing class imbalance in training data is crucial for developing unbiased models. If certain demographics are underrepresented, the model may perform poorly or unfairly for those groups. Adapting training to address this ensures fairer outcomes."
    },
    {
      "id": 95,
      "question": "Which prompting technique can protect against prompt injection attacks?",
      "options": [
        "Adversarial prompting",
        "Zero-shot prompting",
        "Least-to-most prompting",
        "Chain-of-thought prompting"
      ],
      "correctAnswer": [
        "Adversarial prompting"
      ],
      "category": "Prompt Security",
      "explanation": "Adversarial prompting involves testing models with malicious inputs to identify vulnerabilities. By understanding how prompt injection attacks work, you can design defenses and validation mechanisms to protect against them."
    },
    {
      "id": 96,
      "question": "A company has fine-tuned a large language model (LLM) to answer questions for a help desk. The company wants to determine if the fine-tuning has enhanced the model's accuracy. Which metric should the company use for the evaluation?",
      "options": [
        "Precision",
        "Time to first token",
        "F1 score",
        "Word error rate"
      ],
      "correctAnswer": [
        "F1 score"
      ],
      "category": "Model Evaluation Metrics",
      "explanation": "F1 score is a balanced metric that considers both precision and recall, making it ideal for evaluating question-answering systems where you want to balance correct answers (precision) with not missing answers (recall)."
    },
    {
      "id": 97,
      "question": "A company is using Retrieval Augmented Generation (RAG) with Amazon Bedrock and Stable Diffusion to generate product images based on text descriptions. The results are often random and lack specific details. The company wants to increase the specificity of the generated images. Which solution meets these requirements?",
      "options": [
        "Increase the number of generation steps",
        "Use the MASK_IMAGE_BLACK mask source option",
        "Increase the classifier-free guidance (CFG) scale",
        "Increase the prompt strength"
      ],
      "correctAnswer": [
        "Increase the classifier-free guidance (CFG) scale"
      ],
      "category": "Image Generation Parameters",
      "explanation": "Increasing the CFG (classifier-free guidance) scale makes the model follow the text prompt more closely, resulting in images that better match the specific details in the description. Higher CFG values produce more specific, prompt-aligned results."
    },
    {
      "id": 98,
      "question": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue. Which AWS service can help the company use AWS Glue?",
      "options": [
        "Amazon Q Developer",
        "AWS Config",
        "Amazon Personalize",
        "Amazon Comprehend"
      ],
      "correctAnswer": [
        "Amazon Personalize"
      ],
      "category": "AWS AI Services",
      "explanation": "This appears to be an error in the answer key. The correct answer should be A (Amazon Q Developer), which provides AI-powered assistance for coding and using AWS services including AWS Glue. However, the provided answer key shows C."
    },
    {
      "id": 99,
      "question": "A company wants to create a new solution by using AWS Glue. The company has minimal programming experience with AWS Glue. Which AWS service can help the company use AWS Glue?",
      "options": [
        "Amazon Q Developer",
        "AWS Config",
        "Amazon Personalize",
        "Amazon Comprehend"
      ],
      "correctAnswer": [
        "Amazon Q Developer"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Q Developer provides AI-powered assistance for AWS services, including code generation and guidance for using AWS Glue. It can help users with minimal programming experience by providing code examples and answering questions about AWS Glue usage."
    },
    {
      "id": 100,
      "question": "A company is developing a mobile ML app that uses a phone's camera to diagnose and treat insect bites. The company wants to train an image classification model by using a diverse dataset of insect bite photos from different genders, ethnicities, and geographic locations around the world. Which principle of responsible AI does the company demonstrate in this scenario?",
      "options": [
        "Fairness",
        "Explainability",
        "Governance",
        "Transparency"
      ],
      "correctAnswer": [
        "Fairness"
      ],
      "category": "Responsible AI Principles",
      "explanation": "By using a diverse dataset that represents different genders, ethnicities, and geographic locations, the company is ensuring fairness. This prevents bias and ensures the model works well for all users regardless of their demographic characteristics."
    },
    {
      "id": 101,
      "question": "A company is developing an ML model to make loan approvals. The company must implement a solution to detect bias in the model. The company must also be able to explain the model's predictions. Which solution will meet these requirements?",
      "options": [
        "Amazon SageMaker Clarify",
        "Amazon SageMaker Data Wrangler",
        "Amazon SageMaker Model Cards",
        "AWS AI Service Cards"
      ],
      "correctAnswer": [
        "Amazon SageMaker Clarify"
      ],
      "category": "AWS SageMaker Features",
      "explanation": "Amazon SageMaker Clarify is specifically designed to detect bias in ML models and provide explainability through feature importance and SHAP values. It addresses both requirements: bias detection and model explainability."
    },
    {
      "id": 102,
      "question": "A company has developed a generative text summarization model by using Amazon Bedrock. The company will use Amazon Bedrock automatic model evaluation capabilities. Which metric should the company use to evaluate the accuracy of the model?",
      "options": [
        "Area Under the ROC Curve (AUC) score",
        "F1 score",
        "BERTScore",
        "Real world knowledge (RWK) score"
      ],
      "correctAnswer": [
        "BERTScore"
      ],
      "category": "NLP Evaluation Metrics",
      "explanation": "BERTScore is specifically designed for evaluating text generation quality, including summarization. It uses contextual embeddings to measure semantic similarity between generated and reference summaries, making it ideal for evaluating summarization accuracy."
    },
    {
      "id": 103,
      "question": "A media company with a very large archive of unlabeled images, text, audio, and video footage wishes to index its assets to allow rapid identification of relevant content by the Research team. The company wants to use machine learning to accelerate the efforts of its in-house researchers who have limited machine learning expertise. Which is the FASTEST route to index the assets?",
      "options": [
        "Use Amazon Rekognition, Amazon Comprehend, and Amazon Transcribe to tag data into distinct categories/classes",
        "Create a set of Amazon Mechanical Turk Human Intelligence Tasks to label all footage",
        "Use Amazon Transcribe to convert speech to text. Use the Amazon SageMaker Neural Topic Model (NTM) and Object Detection algorithms to tag data into distinct categories/classes",
        "Use the AWS Deep Learning AMI and Amazon EC2 GPU instances to create custom models for audio transcription and topic modeling, and use object detection to tag data into distinct categories/classes"
      ],
      "correctAnswer": [
        "Use Amazon Rekognition, Amazon Comprehend, and Amazon Transcribe to tag data into distinct categories/classes"
      ],
      "category": "AWS AI Services",
      "explanation": "Using pre-built AWS AI services (Rekognition for images/videos, Comprehend for text, Transcribe for audio) is the fastest route because these are managed services requiring no ML expertise. They can immediately start processing and tagging content without training custom models."
    },
    {
      "id": 104,
      "question": "A company is using custom models in Amazon Bedrock for a generative AI application. The company wants to use a company managed encryption key to encrypt the model artifacts that the model customization jobs create. Which AWS service meets these requirements?",
      "options": [
        "AWS Key Management Service (AWS KMS)",
        "Amazon Inspector",
        "Amazon Macie",
        "AWS Secrets Manager"
      ],
      "correctAnswer": [
        "AWS Key Management Service (AWS KMS)"
      ],
      "category": "AWS Security Services",
      "explanation": "AWS KMS (Key Management Service) allows you to create and manage customer-managed encryption keys that can be used to encrypt data in AWS services, including Amazon Bedrock model artifacts. This provides control over encryption keys for compliance and security requirements."
    },
    {
      "id": 105,
      "question": "A company wants to use large language models (LLMs) to produce code from natural language code comments. Which LLM feature meets these requirements?",
      "options": [
        "Text summarization",
        "Text generation",
        "Text completion",
        "Text classification"
      ],
      "correctAnswer": [
        "Text generation"
      ],
      "category": "LLM Capabilities",
      "explanation": "Text generation is the capability that allows LLMs to create new content (like code) from input prompts (like natural language comments). This is the core feature used by code generation tools to convert descriptions into working code."
    },
    {
      "id": 107,
      "question": "A company notices that its foundation model (FM) generates images that are unrelated to the prompts. The company wants to modify the prompt techniques to decrease unrelated images. Which solution meets these requirements?",
      "options": [
        "Use zero-shot prompts",
        "Use negative prompts",
        "Use positive prompts",
        "Use ambiguous prompts"
      ],
      "correctAnswer": [
        "Use negative prompts"
      ],
      "category": "Prompt Engineering",
      "explanation": "Negative prompts explicitly specify what should NOT appear in generated images. This helps guide the model away from unwanted content and reduces the generation of unrelated or unwanted elements in the images."
    },
    {
      "id": 108,
      "question": "A company wants to use a large language model (LLM) to generate concise, feature-specific descriptions for the company's products. Which prompt engineering technique meets these requirements?",
      "options": [
        "Create one prompt that covers all products. Edit the responses to make the responses more specific, concise, and tailored to each product",
        "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response",
        "Include a diverse range of product features in each prompt to generate creative and unique descriptions",
        "Provide detailed, product-specific prompts to ensure precise and customized descriptions"
      ],
      "correctAnswer": [
        "Create prompts for each product category that highlight the key features. Include the desired output format and length for each prompt response"
      ],
      "category": "Prompt Engineering",
      "explanation": "Creating category-specific prompts with clear instructions about key features, format, and length provides the right balance of specificity and efficiency. This approach ensures concise, relevant descriptions while being scalable across product categories."
    },
    {
      "id": 109,
      "question": "A company is developing an ML model to predict customer churn. The model performs well on the training dataset but does not accurately predict churn for new data. Which solution will resolve this issue?",
      "options": [
        "Decrease the regularization parameter to increase model complexity",
        "Increase the regularization parameter to decrease model complexity",
        "Add more features to the input data",
        "Train the model for more epochs"
      ],
      "correctAnswer": [
        "Increase the regularization parameter to decrease model complexity"
      ],
      "category": "Overfitting Solutions",
      "explanation": "This is a classic overfitting problem. Increasing regularization reduces model complexity and prevents the model from memorizing training data, helping it generalize better to new, unseen data."
    },
    {
      "id": 115,
      "question": "Which strategy will determine if a foundation model (FM) effectively meets business objectives?",
      "options": [
        "Evaluate the model's performance on benchmark datasets",
        "Analyze the model's architecture and hyperparameters",
        "Assess the model's alignment with specific use cases",
        "Measure the computational resources required for model deployment"
      ],
      "correctAnswer": [
        "Assess the model's alignment with specific use cases"
      ],
      "category": "Model Evaluation Strategy",
      "explanation": "To determine if a model meets business objectives, you must assess how well it performs on your specific use cases and business requirements. Technical metrics alone don't indicate business value; alignment with actual business needs is key."
    },
    {
      "id": 116,
      "question": "A company needs to train an ML model to classify images of different types of animals. The company has a large dataset of labeled images and will not label more data. Which type of learning should the company use to train the model?",
      "options": [
        "Supervised learning",
        "Unsupervised learning",
        "Reinforcement learning",
        "Active learning"
      ],
      "correctAnswer": [
        "Supervised learning"
      ],
      "category": "ML Methodologies",
      "explanation": "Supervised learning is appropriate when you have labeled data (images with animal type labels). The model learns from these labeled examples to classify new images. This is the standard approach for image classification with labeled datasets."
    },
    {
      "id": 117,
      "question": "Which phase of the ML lifecycle determines compliance and regulatory requirements?",
      "options": [
        "Feature engineering",
        "Model training",
        "Data collection",
        "Business goal identification"
      ],
      "correctAnswer": [
        "Business goal identification"
      ],
      "category": "ML Lifecycle",
      "explanation": "Business goal identification is the initial phase where you define objectives, scope, and constraints including compliance and regulatory requirements. These requirements must be established before data collection and model development begin."
    },
    {
      "id": 119,
      "question": "A company has developed an ML model to predict real estate sale prices. The company wants to deploy the model to make predictions without managing servers or infrastructure. Which solution meets these requirements?",
      "options": [
        "Deploy the model on an Amazon EC2 instance",
        "Deploy the model on an Amazon Elastic Kubernetes Service (Amazon EKS) cluster",
        "Deploy the model by using Amazon CloudFront with an Amazon S3 integration",
        "Deploy the model by using an Amazon SageMaker endpoint"
      ],
      "correctAnswer": [
        "Deploy the model by using an Amazon SageMaker endpoint"
      ],
      "category": "AWS SageMaker Deployment",
      "explanation": "Amazon SageMaker endpoints provide fully managed model deployment where AWS handles the infrastructure, scaling, and maintenance. This is the ideal serverless solution for deploying ML models without infrastructure management."
    },
    {
      "id": 120,
      "question": "A company wants to develop an AI application to help its employees check open customer claims, identify details for a specific claim, and access documents for a claim. Which solution meets these requirements?",
      "options": [
        "Use Agents for Amazon Bedrock with Amazon Fraud Detector to build the application",
        "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application",
        "Use Amazon Personalize with Amazon Bedrock knowledge bases to build the application",
        "Use Amazon SageMaker to build the application by training a new ML model"
      ],
      "correctAnswer": [
        "Use Agents for Amazon Bedrock with Amazon Bedrock knowledge bases to build the application"
      ],
      "category": "Amazon Bedrock Solutions",
      "explanation": "Agents for Amazon Bedrock combined with knowledge bases provides the capability to orchestrate tasks (checking claims, identifying details) and retrieve information from documents. This architecture is ideal for building intelligent assistants that access and process structured information."
    },
    {
      "id": 121,
      "question": "A manufacturing company uses AI to inspect products and find any damages or defects. Which type of AI application is the company using?",
      "options": [
        "Recommendation system",
        "Natural language processing (NLP)",
        "Computer vision",
        "Image processing"
      ],
      "correctAnswer": [
        "Computer vision"
      ],
      "category": "AI Application Types",
      "explanation": "Computer vision is the AI field that enables machines to interpret and analyze visual information from images or videos. Defect detection and quality inspection in manufacturing are classic computer vision applications."
    },
    {
      "id": 122,
      "question": "A company wants to create an ML model to predict customer satisfaction. The company needs fully automated model tuning. Which AWS service meets these requirements?",
      "options": [
        "Amazon Personalize",
        "Amazon SageMaker",
        "Amazon Athena",
        "Amazon Comprehend"
      ],
      "correctAnswer": [
        "Amazon SageMaker"
      ],
      "category": "AWS ML Services",
      "explanation": "Amazon SageMaker provides automatic model tuning (hyperparameter optimization) that automatically finds the best model parameters. This feature automates the model tuning process, making it ideal for this requirement."
    },
    {
      "id": 123,
      "question": "Which technique can a company use to lower bias and toxicity in generative AI applications during the post-processing ML lifecycle?",
      "options": [
        "Human-in-the-loop",
        "Data augmentation",
        "Feature engineering",
        "Adversarial training"
      ],
      "correctAnswer": [
        "Human-in-the-loop"
      ],
      "category": "Bias Mitigation",
      "explanation": "Human-in-the-loop during post-processing involves having humans review and filter model outputs before deployment. This is an effective technique to catch and remove biased or toxic content that the model might generate."
    },
    {
      "id": 124,
      "question": "A bank has fine-tuned a large language model (LLM) to expedite the loan approval process. During an external audit of the model, the company discovered that the model was approving loans at a faster pace for a specific demographic than for other demographics. How should the bank fix this issue MOST cost-effectively?",
      "options": [
        "Include more diverse training data. Fine-tune the model again by using the new data",
        "Use Retrieval Augmented Generation (RAG) with the fine-tuned model",
        "Use AWS Trusted Advisor checks to eliminate bias",
        "Pre-train a new LLM with more diverse training data"
      ],
      "correctAnswer": [
        "Include more diverse training data. Fine-tune the model again by using the new data"
      ],
      "category": "Bias Mitigation",
      "explanation": "The most cost-effective solution is to address the bias at its source by adding diverse training data and fine-tuning again. This directly fixes the problem without requiring expensive pre-training from scratch or complex architectural changes."
    },
    {
      "id": 126,
      "question": "A company needs to log all requests made to its Amazon Bedrock API. The company must retain the logs securely for 5 years at the lowest possible cost. Which combination of AWS service and storage class meets these requirements? (Choose two.)",
      "options": [
        "AWS CloudTrail",
        "Amazon CloudWatch",
        "AWS Audit Manager",
        "Amazon S3 Intelligent-Tiering",
        "Amazon S3 Standard"
      ],
      "correctAnswer": [
        "AWS CloudTrail",
        "Amazon S3 Intelligent-Tiering"
      ],
      "category": "AWS Logging & Storage",
      "explanation": "AWS CloudTrail logs all API calls to Amazon Bedrock. For long-term retention at lowest cost, S3 Intelligent-Tiering automatically moves data to the most cost-effective access tier, providing cost savings for 5-year retention without manual management."
    },
    {
      "id": 127,
      "question": "An ecommerce company wants to improve search engine recommendations by customizing the results for each user of the company's ecommerce platform. Which AWS service meets these requirements?",
      "options": [
        "Amazon Personalize",
        "Amazon Kendra",
        "Amazon Rekognition",
        "Amazon Transcribe"
      ],
      "correctAnswer": [
        "Amazon Personalize"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Personalize is specifically designed to create personalized recommendations based on user behavior and preferences. It's the ideal service for customizing search results and product recommendations for individual users."
    },
    {
      "id": 128,
      "question": "A hospital is developing an AI system to assist doctors in diagnosing diseases based on patient records and medical images. To comply with regulations, the sensitive patient data must not leave the country the data is located in. Which data governance strategy will ensure compliance and protect patient privacy?",
      "options": [
        "Data residency",
        "Data quality",
        "Data discoverability",
        "Data enrichment"
      ],
      "correctAnswer": [
        "Data residency"
      ],
      "category": "Data Governance",
      "explanation": "Data residency refers to keeping data within specific geographic boundaries. This ensures that patient data remains in the country where it originated, meeting regulatory requirements for data sovereignty and privacy protection."
    },
    {
      "id": 129,
      "question": "A company needs to monitor the performance of its ML systems by using a highly scalable AWS service. Which AWS service meets these requirements?",
      "options": [
        "Amazon CloudWatch",
        "AWS CloudTrail",
        "AWS Trusted Advisor",
        "AWS Config"
      ],
      "correctAnswer": [
        "Amazon CloudWatch"
      ],
      "category": "AWS Monitoring Services",
      "explanation": "Amazon CloudWatch is AWS's primary monitoring service that collects and tracks metrics, logs, and events. It's highly scalable and specifically designed for monitoring application and system performance, making it ideal for ML system monitoring."
    },
    {
      "id": 130,
      "question": "An AI practitioner is developing a prompt for an Amazon Titan model. The model is hosted on Amazon Bedrock. The AI practitioner is using the model to solve numerical reasoning challenges. The AI practitioner adds the following phrase to the end of the prompt: 'Ask the model to show its work by explaining its reasoning step by step.' Which prompt engineering technique is the AI practitioner using?",
      "options": [
        "Chain-of-thought prompting",
        "Prompt injection",
        "Few-shot prompting",
        "Prompt templating"
      ],
      "correctAnswer": [
        "Chain-of-thought prompting"
      ],
      "category": "Prompt Engineering",
      "explanation": "Chain-of-thought prompting explicitly asks the model to show its reasoning process step by step. This technique improves performance on complex reasoning tasks by encouraging the model to break down problems into logical steps."
    },
    {
      "id": 131,
      "question": "Which AWS service makes foundation models (FMs) available to help users build and scale generative AI applications?",
      "options": [
        "Amazon Q Developer",
        "Amazon Bedrock",
        "Amazon Kendra",
        "Amazon Comprehend"
      ],
      "correctAnswer": [
        "Amazon Bedrock"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Bedrock is AWS's fully managed service that provides access to foundation models from leading AI companies. It enables users to build and scale generative AI applications without managing infrastructure."
    },
    {
      "id": 132,
      "question": "A company's employees provide product descriptions and recommendations to customers when customers call the customer service center. These recommendations are based on where the customers are located. The company wants to use foundation models (FMs) to automate this process. Which AWS service meets these requirements?",
      "options": [
        "Amazon Macie",
        "Amazon Transcribe",
        "Amazon Bedrock",
        "Amazon Textract"
      ],
      "correctAnswer": [
        "Amazon Bedrock"
      ],
      "category": "AWS AI Services",
      "explanation": "Amazon Bedrock provides foundation models that can understand context (like customer location) and generate appropriate product descriptions and recommendations. It's the ideal service for building AI-powered customer service automation using FMs."
    },
    {
      "id": 133,
      "question": "A company wants to enhance response quality for a large language model (LLM) for complex problem-solving tasks. The tasks require detailed reasoning and a step-by-step explanation process. Which prompt engineering technique meets these requirements?",
      "options": [
        "Few-shot prompting",
        "Zero-shot prompting",
        "Directional stimulus prompting",
        "Chain-of-thought prompting"
      ],
      "correctAnswer": [
        "Chain-of-thought prompting"
      ],
      "category": "Prompt Engineering",
      "explanation": "Chain-of-thought prompting is specifically designed for complex reasoning tasks. It encourages the LLM to show its step-by-step reasoning process, which improves performance on problems requiring detailed logical analysis and explanation."
    },
    {
      "id": 134,
      "question": "A company wants to keep its foundation model (FM) relevant by using the most recent data. The company wants to implement a model training strategy that includes regular updates to the FM. Which solution meets these requirements?",
      "options": [
        "Batch learning",
        "Continuous pre-training",
        "Static training",
        "Latent training"
      ],
      "correctAnswer": [
        "Continuous pre-training"
      ],
      "category": "Model Training Strategies",
      "explanation": "Continuous pre-training (also called ongoing pre-training) involves regularly updating a foundation model with new data to keep it current. This strategy ensures the model stays relevant as new information becomes available."
    },
    {
      "id": 136,
      "question": "Which option is a characteristic of AI governance frameworks for building trust and deploying human-centered AI technologies?",
      "options": [
        "Expanding initiatives across business units to create long-term business value",
        "Ensuring alignment with business standards, revenue goals, and stakeholder expectations",
        "Overcoming challenges to drive business transformation and growth",
        "Developing policies and guidelines for data, transparency, responsible AI, and compliance"
      ],
      "correctAnswer": [
        "Developing policies and guidelines for data, transparency, responsible AI, and compliance"
      ],
      "category": "AI Governance",
      "explanation": "AI governance frameworks focus on establishing policies and guidelines for data management, transparency, responsible AI practices, and regulatory compliance. These elements are essential for building trust and ensuring AI systems are deployed ethically and safely."
    }
  ]
}