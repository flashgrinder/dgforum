import HystModal from 'hystmodal';

function init() {

    let modalsForms = new HystModal({
        linkAttributeName: "data-modal",
        catchFocus: true,
        waitTransitions: true,
        backscroll: true
    });
        
}
  
export default { init }