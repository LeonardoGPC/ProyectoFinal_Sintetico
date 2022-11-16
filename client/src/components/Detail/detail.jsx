import { useParams } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../NavBar/Navbar';
import styles from './detail.module.css';
import { useEffect, useState } from 'react';
import { getFieldDetail } from '../../redux/actions';
import { getFieldComments } from '../../redux/actions';
import { postComment } from '../../redux/actions/index.js';
import MiniFooter from '../MiniFooter/MiniFooter';
import map from '../../img/icons/map.svg';
import buffet from '../../img/icons/buffet.png';
import duchas from '../../img/icons/duchas.png';
import estacionamiento from '../../img/icons/estacionamiento.png';
import quincho from '../../img/icons/quincho.png';
import ReactStars from 'react-stars';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detailField = useSelector((state) => state.detail);
  const cookie = new Cookies()
  const usuario = cookie.get('usuario')
  const [modal, setModal] = useState(false)

  // ---------------------------------
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const handleClick = (value) => {
    setCurrentValue(value);
    // alert(`Hiciste una puntuación de ${value} estrellas`);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };
  // ---------------------------------
  const [comment, setComment] = useState("");
  const comments = useSelector((state)=> state.commentsByField)
  // const [comments, setComments] = useState([]);

  const onClickHandler = async () => {
    // setComments((comments) => [...comments, comment]);
    setComment('');
    setCurrentValue(0);
    setModal(true)
    await dispatch(postComment({ score: currentValue, FieldId: id, comment, UserId: cookie.get("id") }));
    dispatch(getFieldComments(id));
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  useEffect(() => {
    dispatch(getFieldDetail(id));
    dispatch(getFieldComments(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const storageHandler = () => {
  //   if(localStorage.getItem('rent')){
  //     let obj = JSON.parse(localStorage.getItem('rent'))
  //     obj.push({id: detailField.id, name: detailField.name, price: detailField.price})
  //     localStorage.setItem('rent', JSON.stringify(obj))
  //   } else {
  //     let obj = [{id: detailField.id, name: detailField.name, price: detailField.price}]
  //     localStorage.setItem('rent', JSON.stringify(obj))
  //   }
  // }

  return (
    <div>
      <Navbar />
      {detailField ? (
        <div className={styles.detail}>
          <div className={styles.card}>
            <div className={styles.cardContainer}>
              <figure className={styles.image}>
                {/* <button>←</button> */}
                <img src={detailField.image} alt="cancha" />
                {/* <button>→</button> */}
              </figure>
              <div className={styles.info}>
                <div className={styles.title}>
                  <h3 className={styles.name}>{detailField.name}</h3>
                  <div
                    className={styles.button}
                    onClick={() => window.history.back()}
                  >
                    X
                  </div>
                </div>
                <div className={styles.content}>
                  <ul>
                    {/* <li>Rating: {detailField.score}</li> */}
                    {/* <li><Rate disabled allowHalf value={detailField.score} character="★" style={{ fontSize: 30}}/></li> */}
                    <li>
                      <ReactStars
                        count={5}
                        value={detailField.score}
                        size={24}
                        edit={false}
                        color2={'#ffd700'}
                      />
                    </li>
                    <li className={styles.facilities}>
                      {detailField.Facilities?.map((el) => {
                        return (
                          <p
                            key={el.id}
                            className={styles.facilitieIcon}
                            style={{ margin: 3 }}
                          >
                            {el.name === 'Duchas' ? (
                              <img
                                src={duchas}
                                style={{ height: 25 }}
                                alt={el.name}
                              />
                            ) : el.name === 'Estacionamiento' ? (
                              <img
                                src={estacionamiento}
                                style={{ height: 25 }}
                                alt="estacionamiento"
                              />
                            ) : el.name === 'Buffet' ? (
                              <img
                                src={buffet}
                                style={{ height: 25 }}
                                alt="buffet"
                              />
                            ) : (
                              <img
                                src={quincho}
                                style={{ height: 25 }}
                                alt="quincho"
                              />
                            )}
                          </p>
                        );
                      })}
                    </li>

                    <li>
                      Cancha para {detailField.Size ? detailField.Size.name : 0}{' '}
                      jugadores
                    </li>
                    {/* <li>Tipo de suelo: {detailField.Surface ? detailField.Surface.name : "Sin información"}</li> */}
                    <li style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                      <img src={map} style={{ height: 25 }} alt="size" />
                      <p>{detailField.address} | {detailField.City ? detailField.City.name : ''}</p>
                    </li>
                    <li>
                      <p>{detailField.description}</p>
                    </li>
                  </ul>
                  <div className={styles.description}>
                    <span className={styles.price}>
                      <p>${detailField.price}</p>
                      <Link to={'/booking/' + id}>Reservar</Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.review}>
            <h3>Comentarios</h3>
            <div className={styles.container}>
              {/* ------------------ */}
              {comments.map((comment) => (
                <div key={comment.id} className={styles.comment}>
                  <div className={styles.userData}>
                    <figure className={styles.user}>
                      <img
                        src={comment.User.image}
                        alt="foto de perfil"
                        className={styles.profile}
                      />
                      <p>{comment.User.name}</p>
                    </figure>
                    <ReactStars
                      count={5}
                      value={comment.score}
                      size={24}
                      edit={false}
                      color2={'#ffd700'}
                    />
                  </div>

                  <p className={styles.commentData}>{comment.comment}</p>
                </div>
              ))}

              {/* ------------------ */}
            </div>

            {typeof usuario !== 'undefined' ? (
              <div className={styles.yourComment}>
                <h3> Deja tu comentario </h3>
                <div>
                  {stars.map((_, index) => {
                    return (
                      <FaStar
                        key={index}
                        size={24}
                        onClick={() => handleClick(index + 1)}
                        onMouseOver={() => handleMouseOver(index + 1)}
                        onMouseLeave={handleMouseLeave}
                        color={
                          (hoverValue || currentValue) > index
                            ? colors.orange
                            : colors.grey
                        }
                        style={{
                          marginRight: 10,
                          cursor: 'pointer',
                          transition: 'all 300ms ease'
                        }}
                      />
                    );
                  })}
                </div>
                <textarea
                  value={comment}
                  onChange={onChangeHandler}
                  placeholder="Deja tu comentario..."
                  className={styles.textarea}
                />
                <button onClick={onClickHandler} disabled={!comment}>
                  Comentar
                </button>
              </div>
            ): <div>Para dejar un comentario, por favor <Link to='/login' className={styles.login}> inicie sesión </Link> </div>}
          </div>
        </div>
      ) : (
        <p>Cancha inexistente</p>
      )}
      <MiniFooter />
      {modal && <div className={styles.modal_main}>
                <div className={styles.modal_box}>
                    <p>¡Comentario enviado con éxito!</p>
                    <h1>✔️</h1>
                    <div className={styles.modal_btns}>
                        <button onClick={() => setModal(false)}>Cerrar</button>
                    </div>
                </div>
            </div>}
    </div>
  );
}

export default Detail;
