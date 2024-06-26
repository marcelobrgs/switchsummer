export const ChildComponent = ({ propIncrementar, endereco, outraProp,  propDecrementar }) => {
  
    /*
    props significa propriedade
    prop é o que vem antes do sinal de igual (a key, e não o value)
    propIncrementar, outraProp , propDecrementar é a propriedade e não o valor da propriedade
    passa de pai para filho a propriedade e não o valor da propriedade
    endereco = 'rua tal'
    endereco é a props
    rua tal é o value
    passa para o componente filho endereco
    a props é a chave , key
    destructuring da key
    a props passada de pai pra filho é a key, não o value
    a props é endereco, não o valor da props
    desestrutura endereco, propIncrementar, propDecrementar, outraProp

    */
  return (
    <>
      <hr />
      <div>ChildComponent</div>
      <button className="meubotao" onClick={propIncrementar}>
        Incrementar
      </button>
      <button className="meubotao" onClick={propDecrementar}>
        Decrementar
      </button>
      <br />
      <br />
      <p>{endereco}</p>
      <p>{outraProp}</p>
    </>
  );
};
