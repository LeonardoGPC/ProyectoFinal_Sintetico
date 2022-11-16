import styles from "./Benefits.module.css";

export default function Benefits() {
  return (
    <div className={styles.tablecards}>
      <table>
        <thead>
          <tr>
            <th>Beneficios</th>
            <th>Gratis</th>
            <th>Básico</th>
            <th>Club</th>
            <th>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Visualizar reservas disponibles</th>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>Herraientas de búsqueda</th>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>Visualizar canchas publicadas</th>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>Herramientas de publicación</th>
            <td>❌</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>Publicaciones con rating</th>
            <td>❌</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>Comentarios de usuarios</th>
            <td>❌</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>Publica una imagen de tu cancha</th>
            <td>❌</td>
            <td>✔️</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr>
          {/* <tr>
            <th>Herramienta de estadísticas</th>
            <td>❌</td>
            <td>❌</td>
            <td>✔️</td>
            <td>✔️</td>
          </tr> */}
          <tr>
            <th>Mayor recomendación</th>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>Aparece en mejores canchas</th>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
          <tr style={{border: 'none'}}>
            <th>Prioridad de revisión</th>
            <td>❌</td>
            <td>❌</td>
            <td>❌</td>
            <td>✔️</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
