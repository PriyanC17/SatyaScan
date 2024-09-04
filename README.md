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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
