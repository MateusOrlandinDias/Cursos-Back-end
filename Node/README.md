Esta biblioteca tem como finalidade ler arquivos .md, extrair e testar todos os links contidos no texto para descobrir se as páginas ainda funcionam.

Input - Diretório com arquivos .md OU um arquivo específico .md
Flags - "-- valida" para testar a conexão dos sites.
Output Flag Valida - Devolve um array de objetos contendo os links testado e os status code http juntamente com os statusText (transcrição do status code).
Output SEM Flag - Devolve um array de objetos contendo os links retirados do arquivo .md