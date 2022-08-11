--
-- PostgreSQL database dump
--

-- Dumped from database version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.11 (Ubuntu 12.11-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: t_minfin_auction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_minfin_auction (
    auction json
);


ALTER TABLE public.t_minfin_auction OWNER TO postgres;

--
-- Name: t_monobank_rates; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.t_monobank_rates (
    currency json
);


ALTER TABLE public.t_monobank_rates OWNER TO postgres;

--
-- Data for Name: t_minfin_auction; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: t_monobank_rates; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- PostgreSQL database dump complete
--

