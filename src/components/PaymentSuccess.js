import { Player, Controls } from '@lottiefiles/react-lottie-player';

export default function PaymentSuccess() {
    return (
      <div className="row justify-content-center">
        <dotlottie-player src="https://lottie.host/ab15e7b7-9b28-422e-90fa-e287a10bcadd/woyLMXC3Xm.json" 
        background="transparent" speed="1" style={{width: "300px", height: "300px"}} loop autoplay></dotlottie-player>
    
        <h5>Payment Successful</h5>
      </div>
    );
  }