# SatyaScan

## Overview

With the rise of synthetically-generated audios and videos, commonly known as deep fakes, concerns regarding their misuse have become more pronounced. These deep fakes pose significant challenges, including the potential to disrupt politics, commit fraud, spread disinformation, and create non-consensual content. With advancements in AI/ML and Generative AI models, detecting and identifying deep fakes has become increasingly difficult, posing a substantial challenge to security agencies worldwide.

This project aims to develop a robust AI/ML model capable of authenticating face-swap deep fake videos, where a person's facial identity is replaced with another's. The solution utilizes a combination of cutting-edge technologies to detect subtle artifacts and inconsistencies that distinguish deep fake videos from genuine ones.

## Features

- **Upload and Analyze**: Users can upload videos to the platform to verify their authenticity.
- **Comprehensive Analysis**: The platform breaks down videos into individual frames and performs detailed analysis using facial recognition to detect anomalies.
- **Hybrid Model**: A hybrid AI/ML model that combines spatial, temporal, audio, and frequency analysis to improve detection accuracy.
- **Detailed Reports**: The system generates a detailed report that includes whether the video is confirmed fake, the abnormalities observed, and the mathematical techniques likely used in the video's creation.
- **User-Friendly Interface**: Built with ReactJS and Django, the platform provides an easy-to-use interface for seamless interaction.
- **DeepFake Learning Page**: A dedicated page where users can learn more about deep fake technology and its implications.
- **Latest Updates Page**: Stay informed with the latest news and developments in deep fake technology through a specially designed updates page.

## Technology Stack

- **Frontend**: ReactJS
- **Backend**: Django
- **Convolutional Neural Networks (CNNs)**: Utilized to detect inconsistencies in facial features, expressions, and movements over time.
- **Recurrent Neural Networks (RNNs) and LSTM Networks**: Analyze the sequence of frames to identify temporal anomalies indicative of deep fakes.
- **ResNeXt CNN**: Used to extract feature vectors from the frames.
- **Adversarial Training**: Involves training the model with both real and deep fake videos to enhance detection capabilities.
- **Blockchain Technology**: Ensures the authenticity of digital content through immutable records.
- **FaceForensic++ Dataset**: Employed for training the model to maximize feasibility and accuracy.

## Expected Output

The output of the platform includes a detailed report indicating whether the video is authentic or deep fake. The report will detail the abnormalities observed in the video and provide insights into the techniques used for deep fake creation.


## Usage

1. Upload the video suspected of being a deep fake.
2. Click the "Analyze" button.
3. Review the generated report to determine the authenticity of the video.
4. Visit the Learning Page to understand more about deep fakes.
5. Check the Latest Updates page for the newest information on deep fake technology.

## Contributing

We welcome contributions from the community! Please feel free to fork the repository and submit pull requests for new features, bug fixes, or any improvements.

## License

This project is licensed under the MIT License.

