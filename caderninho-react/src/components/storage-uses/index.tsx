
export default function StorageUses() {

    const data = 'Dados armazenados';
  
    // Função para incluir dados no localStorage
    const updateLocalStorage = () => {
      localStorage.setItem('localData', data);
    };
  
    // Função para excluir dados no localStorage
    const deleteLocalStorage = () => {
      localStorage.removeItem('localData');
    }
  
    // Função para incluir dados no SessionStorage
    const updateSessionStorage = () => {
      sessionStorage.setItem('sessionData', data);
    };
  
    // Função para excluir dados no SessionStorage
    const deleteSessionStorage = () => {
      sessionStorage.removeItem('sessionData');
    }
  
    // Função para incluir um cookie
    // Para remove-lo, basta adiconar uma regra para 'expires'
    const updateCookies = () => {
      document.cookie = `myCookieData=${data}; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/`
    }
  
    return (
      <>
        <section className="localStorage">
          <h1>Como usar o Local Storage</h1>
          <div>
            <button onClick={updateLocalStorage}>Atualizar localStorage</button>
            <button onClick={deleteLocalStorage}>Remover localStorage</button>
          </div>
        </section>
  
        <section className="sessionStorage">
          <h1>Como usar o Session Storage</h1>
          <div>
            <button onClick={updateSessionStorage}>Atualizar SessionStorage</button>
            <button onClick={deleteSessionStorage}>Remover SessionStorage</button>
          </div>
        </section>
  
        <section className="cookiesStorage">
          <h1>Como usar os cookies</h1>
          <div>
            <button onClick={updateCookies}>Atualizar Cookies</button>
          </div>
        </section>
  
      </>
    )
  }
  
  