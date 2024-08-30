const url ="https://api.hgbrasil.com/weather?format=json-cors&key=2ebcdf18&city_name=andradas"

acessarAPI()


async function acessarAPI(){
    const resultado = await fetch(url)
    const dados_json = await resultado.json()

    let cidade = dados_json['results'] ['city']
    let descricao_tempo = dados_json['results'] ['description']
    let temperatura_tempo = dados_json['results']['temp']
    let umidade_ar = dados_json['results']['humidity']
    let data = dados_json['results']['date']
    let hora = dados_json['results']['time']
    let ventos = dados_json['results']['wind_speedy']

    span_cidade.innerText = cidade
    span_descricao.innerText = descricao_tempo
    span_temperatura.innerText = temperatura_tempo
    span_umidade.innerText = umidade_ar
    span_data_hora.innerText = data+ " - " + hora
    span_ventos.innerText = ventos

    /*--------------------------------------------------------------------------------------------------------------*/

    let descricao_tempo_1 = dados_json['results']['forecast']['1']['description']
    let temp_maxima_1 = dados_json['results']['forecast']['1']['max']
    let temp_minima_1 = dados_json['results']['forecast']['1']['min']
    let umidade_ar_1 = dados_json['results']['forecast']['1']['humidity']
    let data_1 = dados_json['results']['forecast']['1']['date']
    let hora_1 = dados_json['results']['forecast']['1']['time']
    let ventos_1 = dados_json['results']['forecast']['1']['wind_speedy']

    span_descricao_1.innerText = descricao_tempo_1
    span_temp_minima_1.innerText = temp_minima_1
    span_temp_maxima_1.innerText = temp_maxima_1
    span_umidade_1.innerText = umidade_ar_1
    span_data_hora_1.innerText = data_1
    span_ventos_1.innerText = ventos_1

    /*--------------------------------------------------------------------------------------------------------------*/

    let descricao_tempo_2 = dados_json['results']['forecast']['2']['description']
    let temp_maxima_2 = dados_json['results']['forecast']['2']['max']
    let temp_minima_2 = dados_json['results']['forecast']['2']['min']
    let umidade_ar_2 = dados_json['results']['forecast']['2']['humidity']
    let data_2 = dados_json['results']['forecast']['2']['date']
    let hora_2 = dados_json['results']['forecast']['2']['time']
    let ventos_2 = dados_json['results']['forecast']['2']['wind_speedy']

    span_descricao_2.innerText = descricao_tempo_2
    span_temp_minima_2.innerText = temp_minima_2
    span_temp_maxima_2.innerText = temp_maxima_2
    span_umidade_2.innerText = umidade_ar_2
    span_data_hora_2.innerText = data_2
    span_ventos_2.innerText = ventos_2

    /*--------------------------------------------------------------------------------------------------------------*/

    let descricao_tempo_3 = dados_json['results']['forecast']['3']['description']
    let temp_maxima_3 = dados_json['results']['forecast']['3']['max']
    let temp_minima_3 = dados_json['results']['forecast']['3']['min']
    let umidade_ar_3 = dados_json['results']['forecast']['3']['humidity']
    let data_3 = dados_json['results']['forecast']['3']['date']
    let hora_3 = dados_json['results']['forecast']['3']['time']
    let ventos_3 = dados_json['results']['forecast']['3']['wind_speedy']

    span_descricao_3.innerText = descricao_tempo_3
    span_temp_minima_3.innerText = temp_minima_3
    span_temp_maxima_3.innerText = temp_maxima_3
    span_umidade_3.innerText = umidade_ar_3
    span_data_hora_3.innerText = data_3
    span_ventos_3.innerText = ventos_3

    /*--------------------------------------------------------------------------------------------------------------*/

    let descricao_tempo_4 = dados_json['results']['forecast']['4']['description']
    let temp_maxima_4 = dados_json['results']['forecast']['4']['max']
    let temp_minima_4 = dados_json['results']['forecast']['4']['min']
    let umidade_ar_4 = dados_json['results']['forecast']['4']['humidity']
    let data_4 = dados_json['results']['forecast']['4']['date']
    let hora_4 = dados_json['results']['forecast']['4']['time']
    let ventos_4 = dados_json['results']['forecast']['4']['wind_speedy']

    span_descricao_4.innerText = descricao_tempo_4
    span_temp_minima_4.innerText = temp_minima_4
    span_temp_maxima_4.innerText = temp_maxima_4
    span_umidade_4.innerText = umidade_ar_4
    span_data_hora_4.innerText = data_4
    span_ventos_4.innerText = ventos_4




}