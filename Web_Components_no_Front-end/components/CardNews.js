class CardNews extends HTMLElement {
	constructor() {
		super();

		const shadow = this.attachShadow({ mode: "open" });
		shadow.appendChild(this.build());
		shadow.appendChild(this.styles());
	}

	build() {
		const componentRoot = document.createElement("div");
		componentRoot.setAttribute("class", "card");

		const cardLeft = document.createElement("div");
		cardLeft.setAttribute("class", "card__left");
		const cardAutor = document.createElement("span");
		cardAutor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

		const cardTitulo = document.createElement("a");
		cardTitulo.textContent = this.getAttribute("title");
		cardTitulo.href = this.getAttribute("link-href");

		const newsContent = document.createElement("p");
		newsContent.textContent = this.getAttribute("newsContent");

		cardLeft.appendChild(cardAutor);
		cardLeft.appendChild(cardTitulo);
		cardLeft.appendChild(newsContent);

		const cardRight = document.createElement("div");
		cardRight.setAttribute("class", "card__right");
		const cardImagem = document.createElement("img");
		cardImagem.src =
			this.getAttribute("photo") ||
			"https://cdn.vectorstock.com/i/1000x1000/65/30/default-image-icon-missing-picture-page-vector-40546530.webp";
		cardImagem.alt = this.getAttribute("alt") || "Foto da notícia";
		cardRight.appendChild(cardImagem);

		componentRoot.appendChild(cardLeft);
		componentRoot.appendChild(cardRight);

		return componentRoot;
	}

	styles() {
		const style = document.createElement("style");

		style.textContent = `
      .card{
        width: 80%;
        box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
        display: flex;
        justify-content: space-between;
        padding: 25px;
      }

      .card__left{
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .card__left > span{
        font-weight: 400;
      }

      .card__left > a{
        margin-top: 15px;
        font-size: 25px;
        color: black;
        text-decoration: none;
        font-weight: bold;
      }

      .card__left > p{
        color: rgba(70,70,70)
      }

      .card__right > img{
        width: 300px;
      }
    `;

		return style;
	}
}

customElements.define("card-news", CardNews);
