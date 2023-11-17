<?php
include("./connect/DatabaseClass.php"); 
class Projects extends DatabaseClass {
    protected $grabChosenArr = [];
    protected $grabChosenType = "";
    protected $grabChosenName = "";
    protected $returnData = "";
    private $dbConn;
    
    function __construct($grabChosenArr = []){
        $this->grabChosenArr = $grabChosenArr['newVal'];
    }

    function GetDB() {
        $this->dbClass = new DatabaseClass();
        return $this->dbClass->getConn();
    }

    function grabName() {
        $this->grabChosenName = $this->grabChosenArr[0];
        return $this->grabChosenName;
    }

    function grabType() {
        $this->grabChosenType = $this->grabChosenArr[1];
        return $this->grabChosenType;
    }

    function grabProjects() {
        $this->dbConn = $this->GetDB();

        if($this->grabType() == "majorChioce") {
            if($this->grabName() == "Finished Projects") {
                $stmt = $this->dbConn->prepare("SELECT * FROM FinishedProjects");
                $stmt->execute();
                $this->returnData = $stmt->fetchAll(\PDO::FETCH_ASSOC);
            }
    
            elseif($this->grabName() == "Current Projects") {
                $stmt = $this->dbConn->prepare("SELECT * FROM CurrentProjects");
                $stmt->execute();
                $this->returnData = $stmt->fetchAll(\PDO::FETCH_ASSOC);
            }

            else {
                $this->returnData = $this->grabName;
            }
        }

        return $this->returnData;
    }

}
?>