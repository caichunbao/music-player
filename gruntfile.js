/**
 * 
 * 此文件是node加载，所以模块语法使用node语法
 * 
 */

module.exports = function(grunt){
  grunt.initConfig({
    cssmin:{
      target:{
        files:[{
          expand:true,
          cwd:"./public/css",
          src:["*.css","!*.min.css"],
          dest:"./build/css",
          ext:".min.css",
          rename:function(src,name){
            return src + "/" + name
          },
        }]
      }
    },
    uglify:{
      target:{
        options: {
          compress: {
            drop_console: false
          },
          sourceMap:true
        },
        files:[{
          expand:true,
          cwd:"./build/js",
          src:["*.js","!.min.js"],
          dest:"./build/js",
          ext:".min.js",
          rename:function(src,name){
            return src + "/" + name
          },
        }]
      }
    },
    babel:{
      options:{
        sourceMap:false,
        presets:["env"]
      },
      dist:{
        files: [{
          expand:true,
          cwd:'public/js', //js目录下
          src:['*.js'],    //所有js文件
          dest:'build/js'  //输出到此目录下
        }] 
      }
    },
    imagemin:{
      dynamic:{
        files:[{
          expand:true,
          cwd:"./public/img",
          src:["**/*.{png,jpg,gif}"],
          dest:"./build/img"
        }],
        options:{
          optimizationLevel:3
        }
      }
    },
    watch:{
      es6:{
        files:"./public/js/*.js",
        tasks:["clean","babel"],
        options:{
          livereload:true
        }
      },
      js:{
        files:["./build/js/*.js","!./build/js/*.min.js"],
        tasks:["uglify"],
        options:{
          livereload:true
        }
      },
      css:{
        files:"./public/css/*.css",
        tasks:["cssmin"],
        options:{
          livereload:true
        }
      }
    }
  })
  grunt.registerTask("clean",function(){
    grunt.file.delete("build/js")
  })
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks("grunt-contrib-cssmin")
  grunt.loadNpmTasks("grunt-contrib-uglify")
  grunt.loadNpmTasks('grunt-contrib-watch');
}