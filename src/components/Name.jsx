
 document.addEventListener('mouseover', function() {
            const letters = document.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.1}s`;
            });
        });
export const Name = () => {
  return (
  <div className="name" id="nameTitle">
                <span className="letter">T</span>
                <span className="letter">a</span>
                <span className="letter">Q</span>
                <span className="letter">s</span>
                <span className="letter">i</span>
                <span className="letter">i</span>
                <span className="letter">m</span>
            </div>
  );
}
