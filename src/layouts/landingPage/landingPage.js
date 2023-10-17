import PageLayout from "argonComponents/LayoutContainers/PageLayout";
import im from '../../assets/images/consultaPsi.jpg'
import './landingPage.css'
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "usehooks-ts";

export default function LandingPage() {
    const navigate = useNavigate();
    let minWidth = useMediaQuery('(max-width: 672px)')
    return (
        <PageLayout>
            <div style={{ overflowX: "hidden !important" }} >
                <nav class="navbar navbar-expand-lg navbar-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#" style={{ color: "#93a4c1" }} >Sismaco</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page">Inicio</a>
                                </li>
                                <li class="nav-item" >
                                    <a class="nav-link" href="/login">Contactos</a>
                                </li>
                                <li class="nav-item" onClick={() => navigate("/login")}>
                                    <a class="nav-link" >Iniciar Sessão</a>
                                </li>
                                <li class="nav-item" onClick={() => navigate("/criar_conta")}>
                                    <a class="nav-link" >Registar-se</a>
                                </li>
                                <li class="nav-item">
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <div class="categoryWrapper">
                    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="w-100" src={im} alt="Image" />
                                <div class="carousel-caption">
                                    <h1>Faça agendamento a partir de casa.</h1>
                                    <button>
                                        <span>
                                            <span>
                                                <span data-attr-span="Marcar Consulta">
                                                    Marcar Consulta
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container" id="about">
                    <div class="container">
                        <div class="row g-4 align-items-end mb-4">
                            <div class="startText" data-wow-delay="0.3s">
                                <p class="sismaco"> <span></span> Sismaco</p>
                                <h1 class="display-5 mb-4">Uma solução prática para marcação de consultas.</h1>
                            </div>
                        </div>
                        <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="row g-4">
                                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="h-100">
                                        <div class="d-flex flex-column" style={{ alignItems: 'center', rowGap: '5px' }}>
                                            <div class="iconContainer">
                                                <i class="fa-solid fa-xmark"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h4>Sem custos adicionais</h4>
                                                <span></span>
                                            </div>
                                            <div class="border-end d-none d-lg-block"></div>
                                        </div>
                                        <div class="border-bottom mt-4 d-block d-lg-none"></div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="h-100">
                                        <div class="d-flex flex-column" style={minWidth ? { alignItems: 'center', rowGap: '5px' } : { alignItems: 'center', rowGap: '5px', borderRight: "solid 1px #D8E4FF", borderLeft: "solid 1px #D8E4FF" }}>
                                            <div class="iconContainer">
                                                <i class="fa-solid fa-clock"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h4>Agendar no tempo a sua escolha</h4>
                                                <span></span>
                                            </div>
                                            <div class="border-end d-none d-lg-block"></div>
                                        </div>
                                        <div class="border-bottom mt-4 d-block d-lg-none"></div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div class="h-100">
                                        <div class="d-flex flex-column" style={{ alignItems: 'center', rowGap: '5px' }}>
                                            <div class="iconContainer">
                                                <i class="fa-solid fa-check"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h4>Disponível 24/7 </h4>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="row g-4">
                                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                                    <div class="h-100">
                                        <div class="d-flex flex-column" style={{ alignItems: 'center', rowGap: '5px' }}>
                                            <div class="iconContainer">
                                                <i class="fa-solid fa-map-pin"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h4>Em qualquer lugar</h4>
                                                <span></span>
                                            </div>
                                            <div class="border-end d-none d-lg-block"></div>
                                        </div>
                                        <div class="border-bottom mt-4 d-block d-lg-none"></div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                                    <div class="h-100">
                                        <div class="d-flex flex-column" style={minWidth ? { alignItems: 'center', rowGap: '5px' } : { alignItems: 'center', rowGap: '5px', borderRight: "solid 1px #D8E4FF", borderLeft: "solid 1px #D8E4FF" }}>
                                            <div class="iconContainer">
                                                <i class="fa-solid fa-star"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h4>Servico de Qualidade</h4>
                                                <span></span>
                                            </div>
                                            <div class="border-end d-none d-lg-block"></div>
                                        </div>
                                        <div class="border-bottom mt-4 d-block d-lg-none"></div>
                                    </div>
                                </div>
                                <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                                    <div class="h-100">
                                        <div class="d-flex flex-column" style={{ alignItems: 'center', rowGap: '5px' }}>
                                            <div class="iconContainer">
                                                <i class="fa-solid fa-bell"></i>
                                            </div>
                                            <div class="ps-3">
                                                <h4>Receba lembretes do dia da consulta</h4>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="vantagebsContainer">
                    <div class="container">
                        <div class="Vantagens">
                            <div class="Porqueapostar">
                                <p class="d-inline-block border rounded text-primary-color fw-semi-bold py-1 px-3" style={{ color: "#7389AE", fontSize: "17px" }} >Vantagens de usar o SISMACO!</p>
                                <h1 class="d-inline-block border rounded text-primary-color fw-semi-bold py-1 px-3">Por que apostar no SISMACO?</h1>
                                <p class="mb-4"></p>
                            </div>
                            <div class="col-lg-6">
                                <div class="row g-4 align-items-center">
                                    <div class="col-md-6">
                                        <div class="row g-4">
                                            <div class="col-12 wow fadeIn" data-wow-delay="0.3s">
                                                <div class="feature-box border rounded p-4">
                                                    <i class="fa-solid fa-check"></i>
                                                    <h4 class="mb-3">Reduzir idas ao centro</h4>
                                                    <p class="mb-3"></p>
                                                </div>
                                            </div>
                                            <div class="col-12 wow fadeIn" data-wow-delay="0.5s">
                                                <div class="feature-box border rounded p-4">
                                                    <i class="fa-solid fa-check"></i>
                                                    <h4 class="mb-3">Economizar tempo e dinheiro</h4>
                                                    <p class="mb-3"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 wow fadeIn" data-wow-delay="0.7s">
                                        <div class="feature-box border rounded p-4">
                                            <i class="fa-solid fa-check"></i>
                                            <h4 class="mb-3">Ter certeza de que será atendido</h4>
                                            <p class="mb-3"></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="ContServContainer" class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s" style={{ backgroundColor: "#4C86A8" }} >
                    <div id="ContServ" class="row g-5">
                        <div id="contact" class="col-lg-6 col-md-6">
                            <h4 class="text-white mb-4">Localizacão e Contactos</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Campus UEM – Edifício da FACED, Gabinete 308, 2º Andar</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+258 (21) 430239</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+258 (21) 304405</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>ceap.uem@gmail.com</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>cecoma@uem.ac.mz</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://twitter.com/uemmoz"><i
                                    class="fab fa-twitter"></i>
                                </a>
                                <a class="btn btn-square btn-outline-light rounded-circle me-2" href="https://www.facebook.com/uemmoz?ref=tn_tnmn"><i
                                    class="fab fa-facebook-f"></i>
                                </a>
                            </div>
                        </div>
                        <div id="servicos" class="col-lg-6 col-md-6">
                            <h4 class="text-white mb-4">Servicos</h4>
                            <p class="btn btn-link" href="">Psicologia Clínica e Psicoterapia de Apoio</p>
                            <p class="btn btn-link" href="">Aconselhamento Psicológico</p>
                            <p class="btn btn-link" href="">Consulta de Necessidades Educativas Especiais e Dificuldades de Aprendizagem;</p>
                            <p class="btn btn-link" href="">Orientação Escolar, Vocacional e Profissiona</p>
                            <p class="btn btn-link" href="">Consultas de Terapia Familiar e Comunitária.</p>
                        </div>
                    </div>
                </div>

                <div id="copy" class="row">
                    <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Sismaco</a>, Todos Direitos Reservados
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}