
 document.addEventListener('mouseover', function() {
            const letters = document.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.1}s`;
            });
        });
export const Name = () => {
  return (
  <div class="name" id="nameTitle">
                <span class="letter">T</span>
                <span class="letter">a</span>
                <span class="letter">Q</span>
                <span class="letter">s</span>
                <span class="letter">i</span>
                <span class="letter">i</span>
                <span class="letter">m</span>
            </div>
  );
}
