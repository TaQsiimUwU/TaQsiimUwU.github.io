
 document.addEventListener('mouseover', function() {
            const letters = document.querySelectorAll('.letter');
            letters.forEach((letter, index) => {
                letter.style.animationDelay = `${index * 0.1}s`;
            });
        });
export const Name = () => {
  return (
  <div class="name" id="nameTitle">
                <text class="letter">T</text>
                <text class="letter">a</text>
                <text class="letter">Q</text>
                <text class="letter">s</text>
                <text class="letter">i</text>
                <text class="letter">i</text>
                <text class="letter">m</text>
            </div>
  );
}
