// POST http://localhost:9200/index_name

const body = 
{
  "settings": {
      "number_of_shards": 4,
      "number_of_replicas": 1,
      "store": {
          "preload": "nvd, dvd"
      },
      "analysis": {
          "analyzer": {
              "ik_max_word": {
                  "tokenizer": "ik_max_word"
              },
              "ik_smart": {
                  "tokenizer": "ik_smart"
              }
          }
      },
      "index": {
          "sort.field": "default_sort_key",
          "sort.order": "asc"
      }
  },
  "mappings": {
      "properties": {
          "text_key": {
              "type": "text",
              "analyzer": "ik_max_word",
              "search_analyzer": "ik_smart"
          },
          "keyword_key": {
              "type": "keyword"
          },
          "geo_point_key": {
              "type": "geo_point"
          },
          "date_key": {
              "type": "date"
          }
      }
  }
}