function App() {
  return (
    <>
      <main>
        <section id="section-content">
          <h1 id="title-main">Learn Web development</h1>
          <div className="container">
            <ul className="section-names-buttons">
              <li>
                <button className="btn">HTML</button>
              </li>
              <li>
                <button className="btn">CSS</button>
              </li>
              <li>
                <button className="btn">JavaScript</button>
              </li>
              <li>
                <button className="btn">Node.js</button>
              </li>
              <li>
                <button className="btn">Express</button>
              </li>
              <li>
                <button className="btn">ReactJS</button>
              </li>
            </ul>

            {/*  fine section-names-buttons  */}
            <section className="section-content-button">
              <h3 className="title-content-botton">HTML</h3>
              <p className="description-content-botton">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                illo numquam sit neque odit, sed cum quaerat ipsa fugiat!
                Voluptatum error ducimus nostrum dolorem placeat, exercitationem
                ipsum quibusdam voluptas inventore? Vero ratione sunt ut,
                inventore nostrum similique quam perferendis, minima asperiores
                placeat ipsam quasi enim labore, tenetur possimus adipisci totam
                accusamus eveniet vel quia obcaecati? Numquam dolores mollitia
                suscipit officia. Odit saepe molestias, rem ad, beatae aliquid
                aspernatur voluptates voluptatum iste perspiciatis enim dolor
                repudiandae, quisquam soluta voluptas qui distinctio obcaecati
                nostrum dolore quas laboriosam. Accusantium.
              </p>
            </section>

            {/*  fine section-content-button  */}

            <section className="section-card">
              <div className="card-title">
                <h3 className="card-title">Title</h3>
              </div>
              <div className="card-body">
                <p className="card-description">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, neque.
                </p>
              </div>
            </section>

            {/*  fine section-card */}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
