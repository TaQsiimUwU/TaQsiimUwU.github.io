import '../Styles/404.css';
export const NotFound = () => {
  return (
    <div className="not-found">
      <div className="error">
        <div className="wrap">
          <div className="404">
            <pre><code>
              <span className="green">&lt;!</span><span>DOCTYPE html</span><span className="green">&gt;</span>
              <span className="orange">&lt;html&gt;</span>
              <span className="orange">&lt;style&gt;</span>

              <span className="orange">&lt;/style&gt;</span>
              <span className="orange">&lt;body&gt;</span>
                        ERROR 404!
                  FILE NOT FOUND!
                  <span className="comment">&lt;!--The file you are looking for,
                    is not where you think it is.--&gt;
              </span>
              <span className="orange"></span>

              <span className="orange">&nbsp;&lt;/body&gt;</span>
              <span className="orange">&lt;/html&gt;</span>
            </code></pre>
          </div>
          <br />
          <span className="info">
            <br />
            <br />
          </span>
        </div>
      </div>
    </div>
  );
}
