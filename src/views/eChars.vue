<template>
    <div class="hello">
        <chart ref="chart1" :options="orgOptions" :auto-resize="true"></chart>
      </div>
</template>

<script>
    import eCharsDemo from './eCharsDemo'

    export default {
        name: 'eChars',
        components: {

        },
        data() {
            return {
                student: [],
                eChars: {
                    JDnumber: 0,
                    JXnumber: 0,
                    JGnumber: 0,
                    MKSnumber: 0,
                    WSnumber: 0,
                    SJnumber: 0,
                    SKnumber: 0,
                },
                orgOptions: {},

            }
        },

        created() {
            this.$axios.get("/api/student/findAllStudents")
                .then(res => {
                    this.student = res.data;
                    console.log(res.data);

                    console.log(this.student[0].school);
                    console.log(this.student);
                    for (let i = 0; i <= this.student.length; i++) {
                        if (this.student[i].school == "计电学院") {
                            this.eChars.JDnumber++
                                console.log(this.eChars.JDnumber++);

                        }
                        if (this.student[i].school == "机械学院") {
                            this.eChars.JXnumber++
                        }
                        if (this.student[i].school == "经管学院") {
                            this.eChars.JGnumber++
                        }
                        if (this.student[i].school == "马克思学院") {
                            this.eChars.MKEnumber++
                        }
                        if (this.student[i].school == "文史学院") {
                            this.eChars.WSnumber++
                        }
                        if (this.student[i].school == "数计学院") {
                            this.eChars.SJnumber++
                        }
                        if (this.student[i].school == "生科学院") {
                            this.eChars.SKnumber++
                        }
                    }
                })
                .catch(err => {
                    console.log(err);
                });

        },
        mounted() {
            this.orgOptions = {
                    title: {
                        text: '在Vue中使用echarts'
                    },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: []
                    }],

                },
                this.orgOptions.series[0].data.push(this.eChars.JXnumber);
            console.log(this.orgOptions.series[0].data);

            // if (this.orgOptions && typeof this.orgOptions === "object") {
            //     this.orgOptions.setOption(this.orgOptions, true)
            // }
        }
    }
</script>

<style lang="" scoped>

</style>